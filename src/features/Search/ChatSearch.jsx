import React, { useCallback, useEffect, useState, useRef } from "react";
import { CountryContext } from "../../Context/CountryProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import countryList from "./CountryList";

const API_URL = "https://api.openai.com/v1/";
const MODEL = "gpt-4-turbo";

const ChatSearch = () => {
  const { selectedCountry, setSelectedCountry } =
    React.useContext(CountryContext);
  console.log("ChatSearch-setSelectedCountry:", setSelectedCountry); // ここでselectedCountryの値を確認
  // メッセージの状態管理用のステート
  const [message, setMessage] = useState("");
  // 回答の状態管理用のステート
  const [answer, setAnswer] = useState(selectedCountry.name);
  // 会話の記録用のステート
  const [conversation, setConversation] = useState([]);
  // ローディング表示用のステート
  const [loading, setLoading] = useState(false);
  // 前回のメッセージの保持、比較用
  const prevMessageRef = useRef("");

  let flag = true;

  // 回答が取得されたとき
  useEffect(() => {
    console.log("answerが変更");
    // 直前のチャット内容
    const newConversation = [
      {
        role: "system",
        content:
          "あなたは旅行会社のチャットbotで、日本、アメリカ合衆国、オーストラリア、中華人民共和国、インド、イギリス、フランス、ドイツ、イタリア、ブラジル、カナダ、ロシア、ブラジル、メキシコ、韓国、ノルウェーのどれか国名だけを返してください",
      },
      {
        role: "user",
        content: message,
      },
    ];

    // 回答の表示
    setSelectedCountry({
      name: answer,
      lat: 0,
      lng: 0,
    });

    const matchedCountry = countryList.find(
      (country) => country.name === answer
    );
    if (matchedCountry) {
      setSelectedCountry(matchedCountry);
    } else {
      setSelectedCountry({ name: answer, lat: 0, lng: 0 });
      flag = false;
    }

    // 会話の記録(直前のチャット内容の追加)
    setConversation([...conversation, ...newConversation]);

    // メッセージの消去(フォームのクリア)
    setMessage("");
  }, [answer]);

  function handleNextClick() {
    if (flag === false) {
      alert("マップ情報が得られませんでした");
    }
  }

  // フォーム送信時の処理
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      // フォームが空のとき
      if (!message) {
        alert("メッセージがありません。");
        return;
      }

      // APIリクエスト中はスルー
      if (loading) return;

      // APIリクエストを開始する前にローディング表示を開始
      setLoading(true);

      try {
        // API リクエスト
        const response = await axios.post(
          `${API_URL}chat/completions`,
          {
            model: MODEL,
            messages: [
              ...conversation,
              {
                role: "user",
                content: message,
              },
            ],
          },
          {
            // HTTPヘッダー(認証)
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_CHATGPT_API_KEY}`,
            },
          }
        );

        // 回答の取得
        setAnswer(response.data.choices[0].message.content.trim());
      } catch (error) {
        // エラーハンドリング
        console.error(error);
      } finally {
        // 後始末
        setLoading(false); // ローディング終了
        prevMessageRef.current = message; // 今回のメッセージを保持
      }
    },
    [loading, message, conversation]
  );

  // チャット内容
  const ChatContent = ({ prevMessage, answer }) => {
    return (
      <div className="ChatContent my-10">
        <div className="mb-4 p-4 bg-blue-400 rounded-md">
          <strong className="text-blue-800">あなた：</strong> {prevMessage}
        </div>
        <div className="mb-4 p-4 bg-green-400 rounded-md">
          <strong className="text-yellow-800">AI:</strong> {answer}
        </div>
      </div>
    );
  };

  // フォームの表示
  return (
    <div className="container">
      <form
        className="chat-form justfy-center"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label
          style={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold" }}
        >
          メッセージを入力してください
          <textarea
            className="message"
            rows="5"
            cols="50"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <div className="flex justify-center">
          <button
            type="submit"
            className="h-20 w-50 px-6 m-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-lg text-sm text-emerald-950 md:font-bold px-5 py-2.5 text-center me-2 mb-2"
          >
            　　　　送信　　　　
          </button>
          <button className="h-20 w-50 px-6 m-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-lg text-sm text-emerald-950 md:font-bold px-5 py-2.5 text-center me-2 mb-2">
            <Link to="/result">　　　　決定　　　　</Link>
          </button>
        </div>
      </form>

      <ChatContent prevMessage={prevMessageRef.current} answer={answer} />
    </div>
  );
};
export default ChatSearch;
