import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
import logo_TripDoUp from "../assets/logo_TripDoU.png";
import { IconContext } from "react-icons";
import { IoMdHome } from "react-icons/io"; //Homeアイコン
import { MdAccountCircle } from "react-icons/md"; //Accountアイコン
import { IoSearch } from "react-icons/io5"; //Searchアイコン
import { RiMapPin2Line } from "react-icons/ri"; //国名アイコン
import { FaBars, FaTimes } from "react-icons/fa";
import { CountryContext } from "../Context/CountryProvider";

const Header = () => {
  const { selectedCountry } = React.useContext(CountryContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <header className="px-5 pt-5 w-full relative">
      <div className="container flex mx-auto flex-row h-16 shadow-2xl rounded-full justify-between">
        <img src={logo_TripDoUp} alt="ロゴ" className="object-contain pl-6 py-2" />
        <div className="hidden md:flex font-bold">
          <IconContext.Provider value={{ color: "#000000", size: "24" }}>
            <Link
              to="/"
              className="mr-8"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IoMdHome />
              <span style={{ marginTop: "4px" }}>HOME</span>
            </Link>
            <Link
              to="/Account"
              className="mr-8"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <MdAccountCircle />
              <span style={{ marginTop: "4px" }}>Account</span>
            </Link>
            <Link
              to="/Search"
              className="mr-8"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IoSearch />
              <span style={{ marginTop: "4px" }}>Search</span>
            </Link>
            <Link
              to="/Result"
              className="mr-8"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <RiMapPin2Line />
              <span style={{ marginTop: "4px" }}>{selectedCountry.name}</span>
            </Link>
          </IconContext.Provider>
        </div>
        <div className={`ml-auto flex md:hidden ${isOpen ? "hidden" : ""}`}>
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <FaBars size={24} className="mr-8" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40 "
          onClick={toggleMenu}
        >
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none top-0 right-0 m-4 absolute "
          >
            <FaTimes size={32} style={{color:'white'}}/>
          </button>
        </div>
      )}
      <div
        className={`absolute top-16 left-0 mt-2 bg-white w-full shadow-xl rounded-2xl z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <IconContext.Provider value={{ color: "#000000", size: "32" }}>
          <nav className="flex flex-col md:flex-row">
            <Link
              to="/"
              className="p-4 text-center border-b-2 border-black"
              onClick={() => setIsOpen(false)}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IoMdHome />
              <span className="font-bold">HOME</span>
            </Link>
            <Link
              to="/Account"
              className="p-4 text-center border-b-2 border-black"
              onClick={() => setIsOpen(false)}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MdAccountCircle />
              <span className="font-bold">Account</span>
            </Link>
            <Link
              to="/Search"
              className="p-4 text-center border-b-2 border-black"
              onClick={() => setIsOpen(false)}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IoSearch />
              <span className="font-bold">Search</span>
            </Link>
            <Link
              to="/Result"
              className="p-4 text-center "
              onClick={() => setIsOpen(false)}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RiMapPin2Line />
              <span className="font-bold">{selectedCountry.name}</span>
            </Link>
          </nav>
        </IconContext.Provider>
      </div>
    </header>
  );
};

export default Header;
