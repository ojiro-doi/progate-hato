import React, { useState, useEffect } from 'react';
import { countryList } from '../components/CountryList';
import CountryListSelect from '../components/CountryListSelect';
import Map from '../components/Map';  
import Search_Header from '../components/Search_Header';
import Youtube from './Youtube';
import axios from 'axios';

function Result() {
  const [countryName, setCountryName] = useState('');
  const [center, setCenter] = useState({ lat: 35.68, lng: 139.76 });
  const [videos, setVideos] = useState([]);

  // Youtube APIを呼び出す関数
  const onSearchYoutube = (keyword) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    axios.get(url)
      .then(response => {
        setVideos(response.data.items);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
  };

  useEffect(() => {
    console.log('countryList: ', countryList);
    const randomCountry = countryList[Math.floor(Math.random() * countryList.length)];
    console.log('randomCountry: ', randomCountry);
    setCountryName(randomCountry.name);
    setCenter({ lat: randomCountry.lat, lng: randomCountry.lng });
  }, []); // 初回レンダリング時のみ実行

  return (
    <div>
      <CountryListSelect countryName={countryName} setCountryName={setCountryName} setCenter={setCenter}/>
      <Map countryName={countryName} center={center} />
      <Search_Header onSearchYoutube={onSearchYoutube} />
      <Youtube videos={videos}/>
      <></>
    </div>
  );
}

export default Result;
