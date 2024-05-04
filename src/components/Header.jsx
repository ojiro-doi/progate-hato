import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { IconContext } from "react-icons";
import { IoMdHome } from "react-icons/io"; //Homeアイコン
import { MdAccountCircle } from "react-icons/md"; //Accountアイコン
import { IoSearch } from "react-icons/io5"; //Searchアイコン
import { RiMapPin2Line } from "react-icons/ri"; //国名アイコン
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <header className="px-5 pt-5 w-full relative">
      <div className="container flex mx-auto flex-row h-16 shadow-2xl rounded-full justify-between">
        <img
          src={logo}
          alt="ロゴの名前"
          className="object-contain pl-6 py-2"
        />
        <div className="hidden md:flex">
          <IconContext.Provider value={{ color: "#000000", size: "24" }}>
            <Link to="/" className="p-4">
              <IoMdHome />
            </Link>
            <Link to="/Account" className="p-4">
              <MdAccountCircle />
            </Link>
            <Link to="/Search" className="p-4">
              <IoSearch />
            </Link>
            <Link to="/result" className="p-4">
              <RiMapPin2Line />
            </Link>
          </IconContext.Provider>
        </div>
        <div className={`ml-auto flex md:hidden ${isOpen ? "hidden" : ""}`}>
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}
      <div
        className={`absolute top-16 left-0 mt-2 bg-white w-full shadow-xl rounded-b-lg z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <IconContext.Provider value={{ color: "#000000", size: "32" }}>
          <nav className="flex flex-col md:flex-row">
            <Link
              to="/"
              className="p-4 text-center border-b-2 border-black"
              onClick={() => setIsOpen(false)}
            >
              <IoMdHome />
              <span>HOME</span>
            </Link>
            <Link
              to="/Account"
              className="p-4 text-center border-b-2 border-black"
              onClick={() => setIsOpen(false)}
            >
              <MdAccountCircle />
              <span>Account</span>
            </Link>
            <Link
              to="/Search"
              className="p-4 text-center border-b-2 border-black"
              onClick={() => setIsOpen(false)}
            >
              <IoSearch />
              <span>Search</span>
            </Link>
            <Link
              to="/result"
              className="p-4 text-center border-b-2 border-black"
              onClick={() => setIsOpen(false)}
            >
              <RiMapPin2Line />
              <span>国名</span>
            </Link>
          </nav>
        </IconContext.Provider>
      </div>
    </header>
  );
};

export default Header;
