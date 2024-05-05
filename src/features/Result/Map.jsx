import React, { memo } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  height: "80vh",
  width: "100%",
};

const Map = memo(({ selectedCountry, center }) => {
  console.log("map表示");
  return (
    <>
      {/* {console.log('countryName', countryName)} */}
      <p className="m-3 item-end pl-4 pt-5">
        <strong>国名：{selectedCountry}</strong>
      </p>
      <div className="border-2 border-blue-500 m-4">
        {window.google === undefined ? (
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              <MarkerF position={center} />
            </GoogleMap>
          </LoadScript>
        ) : (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <MarkerF position={center} />
          </GoogleMap>
        )}

        {/* <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </LoadScript> */}
      </div>
    </>
  );
});

export default Map;
