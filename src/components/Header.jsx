import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container flex mx-auto flex-col md:flex-row">
        <h1 className="container py-10 flex w-3/10 font-medium">
          <span className="text-3xl ml-20">アプリ名</span>
        </h1>
        <div className="container py-10 bg-amber-500 flex w-7/10">
          <Link to={"/result"} className="md:ml-auto text-3xl pl-20 mx-20">
            HOME
          </Link>
          <Link to={"/result"} className="md:ml-auto text-3xl mx-20">
            MAP
          </Link>
          <Link to={"/result"} className="md:ml-auto text-3xl mx-20">
            RATE
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
