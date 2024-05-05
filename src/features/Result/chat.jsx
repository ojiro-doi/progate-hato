import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';
 
const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-4-turbo';


const Chat = () => {
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
 
  // 回答が取得されたとき
  useEffect( () => {
    // 直前のチャット内容
    const newConversation = [
      {
        'role': 'system',
        'content': 'ジョジョの奇妙な冒険のキャラクター、ディオ・ブランドーとしてロールプレイを行ったうえで質問の内容に回答してください。「キャラクター設定」を参照して本物のディオとしてふるまってください。また有名なセリフを使用できる適切な箇所があった場合適切なセリフを選択して使用してください。無理に使用する必要はありません。また、敬語以外の質問は受け付けないようにしてください。',
      },
      {
        'role': 'user',
        'content': message,
      }
    ];
 
    // 会話の記録(直前のチャット内容の追加)
    setConversation( [ ...conversation, ...newConversation ] );
 
    // メッセージの消去(フォームのクリア)
    setMessage( '' );
  }, [ answer ] );
 
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
  const ChatContent = React.memo( ( { prevMessage, answer } ) => {
    return (
<div className='space-y-6 pt-5'>
  <div className='p-6 bg-blue-500 text-white rounded-lg shadow-md'>
    <h2 className='font-bold text-2xl mb-4'>質問:</h2>
    <p className='text-lg'>{prevMessage}</p>
  </div>
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
  } );
 
  // フォームの表示
  return (
  <div className='container mx-auto px-4 pt-5'>
  <form className='space-y-4' onSubmit={handleSubmit}>
    <label>
    <p className='mb-2 text-red-600'>ディオ様に質問できます。丁寧な言葉ではないと回答して頂けません。</p>
      <textarea
        className='w-full p-2 border  border-amber-600 rounded-md'
        rows='5'
        value={message}
        onChange={e => {
          setMessage(e.target.value);
        }}
      />
    </label>
    <div>
      <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded-md'>質問する</button>
      <p className='pt-2 text-red-700'>下記に表示↓</p>
    </div>
  </form>
  {loading && (
    <div className='mt-4'>
      <p className='text-lg text-blue-500'>回答中...</p>
    </div>
  )}
  {answer && !loading && (
    <ChatContent
      prevMessage={prevMessageRef.current}
      answer={answer}
      className='mt-4'
    />
  )}
</div>
  );
}
 
export default Chat;
