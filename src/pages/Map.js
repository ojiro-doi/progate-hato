import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useState, useEffect, useMemo } from 'react';

  const containerStyle = {
    height: "80vh",
    width: "100%",
  };

  function Map() {

    const [countryName, setCountryName] = useState('');
    const [center, setCenter] = useState({lat: 35.68, lng: 139.76});

    const countryList = useMemo(() => [
      {name: '日本', lat: 35.68, lng: 139.76},
      {name: 'アメリカ', lat: 37.77, lng: -122.42},
      {name: 'オーストラリア', lat: -35.28, lng: 149.13},
      {name: '中華人民共和国', lat: 39.91, lng: 116.39},
      {name: 'インド', lat: 28.61, lng: 77.23},
      {name: 'イギリス', lat: 51.51, lng: -0.13},
      {name: 'フランス', lat: 48.86, lng: 2.35},
      {name: 'ドイツ', lat: 52.52, lng: 13.40},
      {name: 'イタリア', lat: 41.89, lng: 12.49},
      {name: 'ブラジル', lat: -15.78, lng: -47.93},
      {name: 'カナダ', lat: 45.42, lng: -75.70},
      {name: 'ロシア', lat: 55.75, lng: 37.62},
      {name: 'ブラジル', lat: -15.78, lng: -47.93},

    ], []); // useMemoを使用してcountryListを初期化

    useEffect(() => {
      const randomCountry = countryList[Math.floor(Math.random() * countryList.length)];
      setCountryName(randomCountry.name);
      setCenter({lat: randomCountry.lat, lng: randomCountry.lng});
    }, [countryList]); //初回レンダリング時のみ実行->countryListは定数

    return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
      <>
        <p className='m-3 text-center text-4xl'><strong>国名：{countryName}</strong></p>
        <div className='border-2 border-blue-500 m-4'>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <MarkerF position={center}/>
          </GoogleMap>
        </div>
      </>
    </LoadScript>
    );
  }

export default Map;
