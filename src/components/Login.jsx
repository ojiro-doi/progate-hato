import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  // IDとパスワードのステートを設定
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // ログイン処理
  const handleLogin = () => {
    const nextPageUrl = `${id}${password}.html`; // ログイン後のページURLの作成
    // ログイン処理などの実装
    console.log("ログイン処理:", nextPageUrl);
  };

  return (
    <div className="Form">
      {/* フォーム */}
      <form>
        <h1 className="contact-title flex justify-center mt-20 text-3xl">
          ログイン
        </h1>
        <p className="contact-title flex justify-center mt-10 text-xl">
          メールアドレスとパスワードを入力してください
        </p>
        <div className="contact-title flex justify-center mt-10 text-3xl">
          <input
            type="text"
            placeholder="Mail Adress"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="contact-title flex justify-center mt-5 mb-20 text-3xl">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button flex justify-center mt-10">
          <button className="ml-10 h-20 w-50 m-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-lg text-sm text-emerald-950 md:font-bold px-5 py-2.5 text-center me-2 mb-2">
            <div className="flex justify-center">
              <Link to="/Account">
                <span className="p-10">認証</span>
              </Link>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
