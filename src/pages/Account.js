import React from "react";
import Header from "../components/Header";
import AccountComponent from "../components/Account"; // 名前を変更

function AccountPage() {
  // 関数名を変更
  return (
    <div>
      <Header />
      <AccountComponent /> {/* コンポーネントの呼び出しも修正 */}
    </div>
  );
}

export default AccountPage; // 関数名を変更してエクスポート
