import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useContext } from 'react';
import { CountryContext } from '../../Context/CountryContext';

const containerStyle = {
  height: "80vh",
  width: "100%",
};

const Map = ({countryName,center}) => {
  const {selectedCountry} = useContext(CountryContext);
  return (
      <>
      {/* {console.log('countryName', countryName)} */}
        <p className='m-3 item-end pl-4 pt-5'><strong>国名：{selectedCountry.name}</strong></p>
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
  )
}

export default Map