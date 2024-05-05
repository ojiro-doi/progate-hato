import React from "react";
import { useCallback, useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import { countryList } from "./CountryList";
import { CountryContext } from "../../Context/CountryProvider";

const RouletteDisplay = memo(() => {
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const { selectedCountry, setSelectedCountry } =
    React.useContext(CountryContext);
  console.log("selectedCountry: ", selectedCountry);
  //ボタンの文言を変更する処理
  const changeRoulette = useCallback(() => {
    setStart(!start);
    setClickCount(clickCount + 1);
  }, [start]);

  //ルーレットを回す処理
  useEffect(() => {
    if (start) {
      console.log("countryList: ", countryList);
      console.log("countryList.length: ", countryList.length);
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          if (oldIndex < countryList.length - 1) {
            return oldIndex + 1;
          }
          return 0;
        });
      }, 50); //ルーレットの中身を切り替える速度
      return () => clearInterval(interval);
    } else if (!start && clickCount > 0) {
      setSelectedCountry({
        name: countryList[index].name,
        lat: countryList[index].lat,
        lng: countryList[index].lng,
      });
      return () => clearInterval();
    }
  }, [start]);
  return (
    <div className="button">
      <div>
        <p className="flex justify-center mt-5 mb-20 text-7xl font-mono md:font-bold text-orange-600">
          {countryList[index].name}
        </p>
        <p className="flex justify-center mt-5 mb-3 font-mono">
          下のボタンを押してやねん
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={changeRoulette}
          className="mr-10 h-20 w-50 px-6 m-2 text-lg text-indigo-100 text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-lg text-sm text-emerald-950 md:font-bold px-5 py-2.5 text-center me-2 mb-2"
        >
          {start ? "ストップすんの？" : "スタートすんの？"}
        </button>
        <div className="ml-10 h-20 w-50 px-6 m-2 text-lg text-indigo-100 text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-lg text-sm text-emerald-950 md:font-bold px-5 py-2.5 text-center me-2 mb-2">
          <Link to="/result">NEXT</Link>
        </div>
      </div>
    </div>
  );
});

export default RouletteDisplay;
