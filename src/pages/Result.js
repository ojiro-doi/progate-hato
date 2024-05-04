import React, { useState, useEffect, useContext } from 'react';
import Header from "../components/Header";
import Youtube from './Youtube';
import { countryList } from '../features/Search/CountryList';
import CountryListSelect from '../features/Search/CountryListSelect';
import axios from 'axios';
import RandomDisplay from '../features/Search/RouletteDisplay';
import Chat from '../features/Result/chat';



import { PresWiki } from '../features/Result/PressWiki';
import Map from '../features/Result/Map'; 
import { LoadScript } from '@react-google-maps/api';
import { CountryContext } from '../Context/CountryProvider'; 


function Result() {
  const {selectedCountry,setSelectedCountry} = useContext(CountryContext);

  console.log('result-selectedCountry.name:', selectedCountry.name); // ここでselectedCountryの値を確認

  const center = { lat: selectedCountry.lat, lng: selectedCountry.lng };

  const [videos, setVideos] = useState([]);

  // selectedCountry が設定されるたびに自動で検索を行う
  useEffect(() => {
    if (selectedCountry) {
      // selectedCountryが空でない場合のみ検索を実行
      onSearchYoutube(`${selectedCountry} 旅行`);
    }
  }, [selectedCountry]); // selectedCountryが変更された時のみ検索を再実行

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
  //   setselectedCountry(randomCountry.name);
  //   setCenter({ lat: randomCountry.lat, lng: randomCountry.lng });
  // }, []); //初回レンダリング時のみ実行->空の配列を渡す

  // console.log("redaer")


  return (
    <div>
      <Header />
      <div className="p-5">
<<<<<<< HEAD
        <div className="flex flex-col md:flex-row mt-5">
          <div className="md:w-3/5">
            <h1 className="text-5xl ml-4 mt-5 pb-3 border-b-2 border-black">
=======
        <div className="flex mt-5">
          <div className="w-3/5">
            <h1 className=" text-5xl ml-4 mt-5 pb-3 border-b-2 border-black">
>>>>>>> dev
              Map
            </h1>
              <Map selectedCountry={selectedCountry.name} center={center} />
            <h1 className="text-5xl ml-4 mt-20 pb-3 border-b-2 border-black">
              About
            </h1>
            <PresWiki selectedCountry={selectedCountry.name} />
          </div>
          <div className="md:w-2/5">
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
