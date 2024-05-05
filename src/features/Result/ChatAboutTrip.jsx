import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { ValuesContext } from '../../Context/ValuesProvider';
import { CountryContext } from '../../Context/CountryProvider';

const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-4-turbo';

const ChatAboutTrip = () => {
  // 回答の状態管理用のステート
  const [answer, setAnswer] = useState('');
  // ローディング表示用のステート
  const [loading, setLoading] = useState(false);

  const { values, setValues } = useContext(ValuesContext);
  const { selectedCountry, setSelectedCountry } = useContext(CountryContext);

  // コンポーネントがマウントされたとき
  useEffect(() => {
    const fetchAnswer = async () => {
      // APIリクエストを開始する前にローディング表示を開始
      setLoading(true);

      try {
        // API リクエスト
        const response = await axios.post(`${API_URL}chat/completions`, {
          model: MODEL,
          messages: [
            {
              'role': 'system',
              'content': `あなたは旅行会社の社員です。お客様が${selectedCountry.name}に行くことを決めました。${values.amount}を使って${values.days}の旅行を計画してください。${values.people}で行くことになります。 なるべく完結に回答してください。`,
            },
          ],
        }, {
          // HTTPヘッダー(認証)
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_CHATGPT_API_KEY}`
          }
        });

        // 回答の取得
        setAnswer(response.data.choices[0].message.content.trim());

      } catch (error) {
        // エラーハンドリング
        console.error(error);

      } finally {
        // 後始末
        setLoading(false);  // ローディング終了
      }
    };

    fetchAnswer();
  }, []);

  // チャット内容
  const ChatContent = React.memo(({ answer }) => {
    return (
      <div className='space-y-6 pt-5'>
        <div className='p-6 bg-white rounded-lg shadow-md'>
          <h2 className='font-bold text-2xl mb-4'>回答:</h2>
          <p className='text-lg'>
            {answer.split(/\n/).map((item, index) => (
              <React.Fragment key={index}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    )
  });

  // フォームの表示
  return (
    <div className='container mx-auto px-4 pt-5'>
      {loading && (
        <div className='mt-4'>
          <p className='text-lg text-blue-500'>回答中...</p>
        </div>
      )}
      {answer && !loading && (
        <ChatContent
          answer={answer}
          className='mt-4'
        />
      )}
    </div>
  );
}

export default ChatAboutTrip;