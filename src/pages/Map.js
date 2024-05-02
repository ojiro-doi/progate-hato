import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import axios from 'axios';  //javascriptHTTPリクエストを作成するためのライブラリ

const containerStyle = {
  height: "80vh",
  width: "100%",
};

  function Map() {

    const [loaded, setLoaded] = useState(false);
    const [countryName, setCountryName] = useState('');
    const [center, setCenter] = useState(Math.random() * 180 - 90, Math.random() * 360 - 180);

    useEffect(() => {
      getCountryName(center.lat, center.lng)
        //取得成功
        .then(name => setCountryName(name))
        //取得失敗
        .catch(error => {
          // 国名が取得できなかった場合、centerをランダムな緯度経度に更新
          setCenter({
            lat: Math.random() * 180 - 90,
            lng: Math.random() * 360 - 180
          });
        });
    }, [center]);

    async function getCountryName(lat, lng) {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`);
      //データを非同期に取得するためにaxios.getを使用
      //Google Maps Geocoding APIを使用して、緯度と経度から国名を取得
      if (response.data.status === 'OK') {
        const results = response.data.results;
        if (results[0]) {
          const addressComponents = results[0].address_components;
          const countryComponent = addressComponents.find(component => component.types.includes('country'));
          if (countryComponent) {
            return countryComponent.long_name; //国名を返す
          }
        }
      }
  
      throw new Error('国名が取得できませんでした');
    }

    return (
<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY} onLoad={() => setLoaded(true)}>
  {loaded && countryName && (  // loadedとcountryNameがtrueの場合に表示
    <>
      <p><strong>国名：{countryName}</strong></p>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <MarkerF position={center}/>
      </GoogleMap>
    </>
  )}
</LoadScript>
    );
  }

export default Map;
