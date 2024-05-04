import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Youtube from './Youtube';
import { countryList } from '../components/CountryList';
import CountryListSelect from '../components/CountryListSelect';
import axios from 'axios';
import RandomDisplay from '../components/RouletteDisplay';
import Chat from '../features/Result/chat';
import { PresWiki } from '../features/Result/PresWiki';
import Map from '../features/Result/Map';  


function Result() {
  const {selectedCountry} = useContext(CountryContext);
  console.log('result-selectedCountry.name:', selectedCountry.name); // ここでselectedCountryの値を確認

  const [countryName, setCountryName] = useState('');
  const [center, setCenter] = useState({ lat: 35.68, lng: 139.76 });
  const [videos, setVideos] = useState([]);

  // countryName が設定されるたびに自動で検索を行う
  useEffect(() => {
    if (countryName) {
      // countryNameが空でない場合のみ検索を実行
      onSearchYoutube(`${countryName} 旅行`);
    }
  }, [countryName]); // countryNameが変更された時のみ検索を再実行

  const onSearchYoutube = (searchQuery) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${encodeURIComponent(
      searchQuery
    )}&maxResults=5&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
        alert("YouTubeの動画検索に失敗しました。");
      });
  };

  // useEffect(() => {
  //   const randomCountry = countryList[Math.floor(Math.random() * countryList.length)];
  //   setCountryName(randomCountry.name);
  //   setCenter({ lat: randomCountry.lat, lng: randomCountry.lng });
  // }, []); //初回レンダリング時のみ実行->空の配列を渡す

  // console.log("redaer")


  return (
    <div>
      <Header />
      <div className="p-5">
        {/* <CountryListSelect
          countryName={countryName}
          setCountryName={setCountryName}
          setCenter={setCenter}
          className="countrylistselect text-5xl"
        /> */}
        <div className="flex mt-5">
          <div className="w-3/5">
            <h1 className=" text-5xl ml-4 mt-5 pb-3 border-b-2 border-black">
              Map
            </h1>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
              <Map countryName={selectedCountry.name} center={center} />
            </LoadScript>
            <h1 className="text-5xl ml-4 mt-20 pb-3 border-b-2 border-black">
              About
            </h1>
            <PresWiki countryName={countryName} />
          </div>
          <div className="w-2/5">
            <h1 className="text-5xl ml-4 mt-5 text-left pb-3 border-b-2 border-black">
              Youtube
            </h1>
            <div className="flex justify-center">
              <Youtube videos={videos} />
            </div>
          </div>
        </div>
        <Chat />
      </div>
    </div>
  );
}

export default Result;
