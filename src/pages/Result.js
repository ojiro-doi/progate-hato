import React, { useState, useEffect } from 'react';
import Youtube from './Youtube';
import { countryList } from '../components/CountryList';
import CountryListSelect from '../components/CountryListSelect';
import axios from 'axios';
import RandomDisplay from '../components/RandomDisplay';
import Chat from '../components/chat';
import { PresWiki } from '../components/PresWiki';
import Map from '../components/Map';  


function Result() {

  const [countryName, setCountryName] = useState('');
  const [center, setCenter] = useState({ lat: 35.68, lng: 139.76 });
  const [videos, setVideos] = useState([]);

  // countryName が設定されるたびに自動で検索を行う
  useEffect(() => {
    if (countryName) {  // countryNameが空でない場合のみ検索を実行
      onSearchYoutube(`${countryName} 旅行`);
    }
  }, [countryName]);  // countryNameが変更された時のみ検索を再実行

  const onSearchYoutube = (searchQuery) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=5&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

    axios.get(url)
      .then(response => {
        setVideos(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching YouTube videos:', error);
        alert('YouTubeの動画検索に失敗しました。');
      });
  };

  useEffect(() => {
    const randomCountry = countryList[Math.floor(Math.random() * countryList.length)];
    setCountryName(randomCountry.name);
    setCenter({ lat: randomCountry.lat, lng: randomCountry.lng });
  }, []); //初回レンダリング時のみ実行->空の配列を渡す


  return (
    <div className='p-5'>
      <div className='flex'>
        <div className='w-3/5'>
        <CountryListSelect
          countryName={countryName}
          setCountryName={setCountryName}
          setCenter={setCenter}
          className="countrylistselect"
        />
        <h1 className=' text-5xl ml-4 mt-5 pb-3 border-b-2 border-black'>Map</h1>
          <Map countryName={countryName} center={center} />
          <h1 className='text-5xl ml-4 mt-5 pb-3 border-b-2 border-black'>About</h1>
          <PresWiki countryName={countryName}/>
        </div>
        <div className='w-2/5'>
          <h1 className='text-5xl ml-4 mt-5 text-left pb-3 border-b-2 border-black'>Youtube</h1>
          {/* <Youtube videos={videos}/> */}
        </div>
      </div>
      <Chat/>

    </div>
  );
}

export default Result;
