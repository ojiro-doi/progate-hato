import React, { useCallback, useEffect, useState, useRef, useContext} from 'react';
import { CountryContext } from '../../Context/CountryProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import countryList from './CountryList';

const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-4-turbo';

const ChatSearch = () => {
  // メッセージの状態管理用のステート
  const [ message, setMessage ] = useState( '' );
  // 回答の状態管理用のステート
  const [ answer, setAnswer ] = useState( '' );
  // 会話の記録用のステート
  const [ conversation, setConversation ] = useState( [] );
  // ローディング表示用のステート
  const [ loading, setLoading ] = useState( false );
  // 前回のメッセージの保持、比較用
  const prevMessageRef = useRef( '' );
  const { SelectedCountry, setSelectedCountry } = useContext(CountryContext);

  let flag = true;


  // 回答が取得されたとき
  useEffect( () => {
    // 直前のチャット内容
    const newConversation = [
      {
        'role': 'system',
        'content': 'あなたは旅行会社のチャットbotで、日本、アメリカ合衆国、オーストラリア、中華人民共和国、インド、イギリス、フランス、ドイツ、イタリア、ブラジル、カナダ、ロシア、ブラジル、メキシコ、韓国、ノルウェーのどれか国名だけを返してください',
      },
      {
        'role': 'user',
        'content': message,
      }
    ];

    // 回答の表示
    setSelectedCountry({
      name: answer,
      lat: 0,
      lng: 0
    });

    const matchedCountry = countryList.find(country => country.name === answer);
    if (matchedCountry) {
      setSelectedCountry(matchedCountry);
    }else{
      flag = false;
    }

 
    // 会話の記録(直前のチャット内容の追加)
    setConversation( [ ...conversation, ...newConversation ] );
 
    // メッセージの消去(フォームのクリア)
    setMessage( '' );
  }, [ answer ] );

  function handleNextClick() {
    if (flag == false) {
      alert("マップ情報が得られませんでした");
    } 
  }
 
  // フォーム送信時の処理
  const handleSubmit = useCallback( async ( event ) => {
    event.preventDefault();
 
    // フォームが空のとき
    if ( !message ) {
      alert( 'メッセージがありません。' );
      return;
    }
 
    // APIリクエスト中はスルー
    if ( loading ) return;
 
    // APIリクエストを開始する前にローディング表示を開始
    setLoading( true );
 
    try {
      // API リクエスト
      const response = await axios.post( `${ API_URL }chat/completions`, {
        model: MODEL,
        messages: [
          ...conversation,
          {
            'role': 'user',
            'content': message,
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
      setAnswer( response.data.choices[0].message.content.trim() );
 
    } catch ( error ) {
      // エラーハンドリング
      console.error( error );
 
    } finally {
      // 後始末
      setLoading( false );  // ローディング終了
      prevMessageRef.current = message; // 今回のメッセージを保持
    }
  }, [ loading, message, conversation ] );
 
  // チャット内容
  const ChatContent = ({ prevMessage, answer }) => {
    return (
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#d9edf7', borderRadius: '5px' }}>
          <strong>あなた：</strong> {prevMessage}
        </div>
        <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#fcf8e3', borderRadius: '5px' }}>
          <strong>AI：</strong> {answer}
        </div>
      </div>
    );
  };
 
  // フォームの表示
  return (
    <div className='container'>
      <form className='chat-form' onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ marginBottom: '10px', fontSize: '20px', fontWeight: 'bold' }}>
          メッセージを入力してください
          <textarea
            className='message'
            rows='5'
            cols='50'
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
            style={{ marginTop: '10px', width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
        <div>
          <button type="submit" style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#007BFF', color: '#fff' }}>
            送信
          </button>
          <div className='p-3'>
            <Link to="/result" className='text-blue-500 bg-sky-950' onClick={handleNextClick}>NEXT</Link>
          </div>
        </div>
      </form>

      <ChatContent prevMessage={prevMessageRef.current} answer={answer} />
    </div>
  );
}
export default ChatSearch
