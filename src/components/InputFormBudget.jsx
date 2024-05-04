import React, { useState, useContext, useEffect } from "react";
import RandomDisplay from "../features/Search/RouletteDisplay";
import CountryList from "../features/Search/CountryList";
import { Link } from "react-router-dom";
import { CountryContext } from "../Context/CountryContext";
import piza from "../assets/piza.png";

const InputFormBudget = () => {
  const [amount, setAmount] = useState("");
  const [option, setOption] = useState("");
  const { selectedCountry, setSelectedCountry } = useContext(CountryContext);

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
