import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
// import { useState, useEffect, useMemo } from 'react';
// import {countryList} from '../components/CountryList';
// import CountryListSelect from '../components/CountryListSelect';

const containerStyle = {
  height: "80vh",
  width: "100%",
};

const Map = ({countryName,center}) => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
      <>
      {console.log('countryName', countryName)}
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
  )
}

export default Map