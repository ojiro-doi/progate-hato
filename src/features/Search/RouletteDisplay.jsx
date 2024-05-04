import React from 'react';
import { useCallback, useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { countryList } from './CountryList';
import {CountryContext} from '../../Context/CountryProvider';

const RouletteDisplay = memo(() => {
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);
  const { selectedCountry, setSelectedCountry } = React.useContext(CountryContext);

  //ボタンの文言を変更する処理
  const changeRoulette = useCallback(() => {
    setStart(!start);
  }, [start]);


  //ルーレットを回す処理
  useEffect(() => {
    if (start) {
      console.log('countryList: ', countryList);
      console.log('countryList.length: ', countryList.length);
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          if (oldIndex < countryList.length - 1) {
            return oldIndex + 1;
          }
          return 0;
        });
      }, 50); //ルーレットの中身を切り替える速度
      return () => clearInterval(interval);
    } else if (!start) {
      setSelectedCountry({
        name: countryList[index].name,
        lat: countryList[index].lat,
        lng: countryList[index].lng
      });
      return () => clearInterval();
    }
  }, [start]);
  return (
    <div className='flex justify-center'>
      <div>
        <p>下のボタンを押してや</p>
        <p>{countryList[index].name}</p>
      </div>
      <button
        onClick={changeRoulette}
        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-700 active:border-b-0 active:pt-3 rounded"
      >
        {start ? 'ストップすんの' : 'スタートすんの'}
      </button>
      <div className="ml-10 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-700 active:border-b-0 active:pt-3 rounded">
        <Link to="/result">NEXT</Link>
      </div>
    </div>
  );
});

export default RouletteDisplay;
