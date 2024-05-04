import React, { useState, useEffect } from "react";
import RandomDisplay from "./RouletteDisplay";
import CountryList from "./CountryList";
import { Link } from "react-router-dom";
<<<<<<< HEAD:src/components/InputFormBudget.jsx
import { CountryContext } from "../Context/CountryContext";
import piza from "../assets/piza.png";

const InputFormBudget = () => {
  const [amount, setAmount] = useState("");
  const [option, setOption] = useState("");
  const { selectedCountry, setSelectedCountry } = useContext(CountryContext);
=======
import { CountryContext } from "../../Context/CountryProvider";

const InputFormBudget = () => {
  const [option, setOption] = useState("");
  const { selectedCountry, setSelectedCountry } = React.useContext(CountryContext);
>>>>>>> dev:src/features/Search/SearchFormat.jsx

  const handleCountryChange = (event) => {
    try {
      const selectedCountryInfo = JSON.parse(event.target.value);

      setSelectedCountry({
        name: selectedCountryInfo.name,
        lat: selectedCountryInfo.lat,
        lng: selectedCountryInfo.lng,
      });
    } catch (error) {
      console.error(`Invalid JSON: ${event.target.value}`);
    }
  };

  console.log("selectedCountry.name:", selectedCountry.name); // ここでselectedCountryの値を確認
  console.log("selectedCountry.lat:", selectedCountry.lat); // ここでselectedCountryの値を確認

  useEffect(() => {
    console.log(selectedCountry);
  }, [selectedCountry]);

  return (
<<<<<<< HEAD:src/components/InputFormBudget.jsx
    <div className="container mx-auto px-4">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-mono my-4">
      行き先は
      <select
        value={option}
        onChange={e => setOption(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2 mx-2 text-base"
      >
        <option>ランダム</option>
        <option>自分の運命は自分で決めるものだ</option>
        <option>質問</option>
      </select>
      で決める！
    </h1>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono my-4 text-center">
      君の旅行先は！？
    </h1>
    {option === 'ランダム' && <RandomDisplay />}
    {option === '自分の運命は自分で決めるものだ' && (
      <div className="flex flex-col sm:flex-row justify-center items-center mx-2">
        <div className="bg-amber-500 text-lg sm:text-xl md:text-2xl text-black text-center px-5 py-2 rounded-full my-2">
          <select onChange={handleCountryChange} className="w-full">
            {CountryList.map((country, index) => (
              <option key={index} value={JSON.stringify(country)}>
                {country.name}
              </option>
            ))}
          </select>
=======
    <div className="container">
      <h1 className="text-4xl font-mono mt-20 ml-20">
        行き先は
        <span>
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2 mx-5 mb-20 flex-grow text-center"
            placeholder="ランダム"
          >
            <option>ランダム</option>
            <option>自分の運命は自分で決めるものだ</option>
            <option>質問</option>
          </select>
        </span>
        で決める！
      </h1>
      <h1 className="text-7xl font-mono mt-10 mb-10 text-center">
        君の旅行先は！？
      </h1>
      <div className="ml-20 mb-10 flex justify-center"></div>
      {option === "ランダム" && <RandomDisplay />}
      {option === "自分の運命は自分で決めるものだ" && (
        <div className="ml-20 flex justify-center">
          <div className="bg-amber-500 text-5xl text-black text-center px-10 py-5 mx-20 my-10 rounded-full flex justify-center items-center">
            <select onChange={handleCountryChange} className="text-center">
              {CountryList.map((country, index) => (
                <option key={index} value={JSON.stringify(country)}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
            <div className="bg-amber-500 hover:bg-green-700 text-5xl text-black text-center px-10 py-5 mx-20 my-10 rounded-full flex justify-center items-center">
              <Link to="/result" className="ml-4">
                決定
              </Link>
            </div>
>>>>>>> dev:src/features/Search/SearchFormat.jsx
        </div>
        <div className="bg-amber-500 hover:bg-green-700 text-lg sm:text-xl md:text-2xl text-black text-center px-5 py-2 rounded-full my-2">
          <Link to="/result" className="w-full">決定</Link>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default InputFormBudget;
