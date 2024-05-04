import React, { useState, useContext } from "react";
import RandomDisplay from "./RouletteDisplay";
import CountryList from "./CountryList";
import { Link } from "react-router-dom";
import { CountryContext } from "../../Context/CountryProvider";

const InputFormBudget = () => {
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
      // Optionally display an error message to the user
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl md:text-3xl font-mono my-4 text-center">
        行き先は
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)} // e.target.valueを使用して選択された値を更新
          className="border-2 border-gray-300 rounded-md mx-2 p-2"
        >
          <option value="random">ランダム</option>
          <option value="choose">自分の運命は自分で決めるものだ</option>
          <option value="question">質問</option>
        </select>
        で決める！
      </h1>
      <h2 className="text-2xl md:text-5xl font-mono my-4 text-center">
        君の旅行先は！？
      </h2>
      {option === "random" && <RandomDisplay />}
      {option === "choose" && (
        <div className="flex flex-col md:flex-row justify-center items-center my-4">
          <select
            onChange={handleCountryChange}
            className="bg-amber-500 text-lg md:text-xl rounded-full p-3 text-center"
          >
            {CountryList.map((country, index) => (
              <option key={index} value={JSON.stringify(country)}>
                {country.name}
              </option>
            ))}
          </select>
          <Link
            to="/result"
            className="bg-amber-500 hover:bg-green-700 rounded-full p-3 mx-2 text-lg md:text-xl"
          >
            決定
          </Link>
        </div>
      )}
    </div>
  );
};

export default InputFormBudget;
