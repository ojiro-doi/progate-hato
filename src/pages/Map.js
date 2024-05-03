import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

  const containerStyle = {
    height: "80vh",
    width: "100%",
  };

  function Map() {

    const [countryName, setCountryName] = useState('');
    const [center, setCenter] = useState({lat: 35.68, lng: 139.76});
    const navigate = useNavigate();

    const countryList = useMemo(() => [
      { name: '東京ドーム' , lat: 35.7057, lng: 139.7539},
      { name: '名古屋城' , lat: 35.1815, lng: 136.9066},
      { name: '大阪城' , lat: 34.6873, lng: 135.5259},
      { name: '広島城' , lat: 34.3923, lng: 132.4846},
      { name: '福岡城' , lat: 33.5899, lng: 130.4017},
      { name: '金沢城' , lat: 36.5781, lng: 136.6483},
      { name: '松本城' , lat: 36.2380, lng: 137.9716},
      { name: '姫路城' , lat: 34.8393, lng: 134.6933},
      { name: '熊本城' , lat: 32.8067, lng: 130.7079},
      { name: '高知城' , lat: 33.5584, lng: 133.5311},
      { name: '松山城' , lat: 33.8394, lng: 132.7656},
      { name: '岡山城' , lat: 34.6617, lng: 133.9344},
      { name: '彦根城' , lat: 35.2744, lng: 136.2597},
      { name: '岡崎城' , lat: 34.9554, lng: 137.2464},
      { name: '犬山城' , lat: 35.3883, lng: 136.9633},
      { name: '松江城' , lat: 35.4722, lng: 133.0506},
      { name: '松山城' , lat: 33.8394, lng: 132.7656},
      { name: '岡山城' , lat: 34.6617, lng: 133.9344},
      { name: '彦根城' , lat: 35.2744, lng: 136.2597},
      { name: '岡崎城' , lat: 34.9554, lng: 137.2464},
      { name: '犬山城' , lat: 35.3883, lng: 136.9633},
      { name: '松江城' , lat: 35.4722, lng: 133.0506},
      { name: '松本城' , lat: 36.2380, lng: 137.9716},

    ], []); // useMemoを使用してcountryListを初期化

    useEffect(() => {
      const randomCountry = countryList[Math.floor(Math.random() * countryList.length)];
      setCountryName(randomCountry.name);
      setCenter({lat: randomCountry.lat, lng: randomCountry.lng});
    }, [countryList]); //初回レンダリング時のみ実行->countryListは定数

    const handleClick = () => {
      navigate(`/directions?country=${countryName}&lat=${center.lat}&lng=${center.lng}`);
    };

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
        <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4'>ルート案内</button>
      </>
    </LoadScript>
    );
  }

export default Map;
