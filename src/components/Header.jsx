import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="bg-green-400">
      <div className="container flex mx-auto p-5 flex-col items-center md:flex-row">
        <h1 className="font-medium">
          <span className="text-xl">ランダムマップ</span>
        </h1>
        <Link to={'/result'} className="md:ml-auto text-base border-b-2 border-gray-300">結果ページ</Link>
      </div>
    </header>
  );
};

export default Header;


