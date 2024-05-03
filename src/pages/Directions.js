import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer ,MarkerF} from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';

function Directions() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lat = parseFloat(queryParams.get('lat'));
  const lng = parseFloat(queryParams.get('lng'));

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [response, setResponse] = useState(null);
  const [prevResponse, setPrevResponse] = useState(null);
  const [duration, setDuration] = useState(''); // 新たなstateを追加
  const [distance, setDistance] = useState(''); // 新たなstateを追加

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const containerStyle = {
    width: '100%',
    height: '400px'
  };


  useEffect(() => {
    // ユーザーの現在地を取得
    navigator.geolocation.getCurrentPosition((position) => {
      setOrigin({ lat: position.coords.latitude, lng: position.coords.longitude });
    });

    // クエリパラメータから取得した国の位置を設定
      setDestination({ lat: lat, lng: lng });
    }, [lat, lng]);

    const directionsCallback = (response) => {
      if (response !== null) {
        if (response.status === 'OK') {
          if (response !== prevResponse) {
            setResponse(response);
            setPrevResponse(response);

            // 経路の所要時間と距離を取得
            const route = response.routes[0].legs[0];
            setDuration(route.duration.text); // stateを更新
            setDistance(route.distance.text); // stateを更新
          }
        } else {
          console.log('response: ', response);
        }
      }
    };



  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={destination}
        zoom={10}
      >
          <MarkerF position={center}/>
          {origin && destination && (
          <DirectionsService
            // 経路の始点と終点を指定
            options={{
              destination: destination,
              origin: origin,
              travelMode: 'DRIVING'
            }}
            callback={directionsCallback}
          />
        )}
        {response !== null && (
          <DirectionsRenderer
            // 経路を描画するためのオプションを指定
            options={{
              directions: response
            }}
          />
        )}
      </GoogleMap>
      <p>所要時間: {duration}</p>
      <p>距離: {distance}</p>
    </LoadScript>
  );
}

export default Directions;