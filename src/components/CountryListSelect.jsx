import React from 'react';
import { countryList } from '../components/CountryList';

const CountryListSelect = ({ countryName, setCountryName,setCenter }) => {
  return (
    <div>
      {/* {console.log('countryList: ', countryList)} */}
      <select
        value={countryName}
        onChange={(e) => {
          console.log('countryList[e.target.value]: ', countryList[e.target.value]);
          setCountryName(countryList[e.target.value].name);
          setCenter({lat:countryList[e.target.value].lat,lng:countryList[e.target.value].lng});
        }}
      >
        {Object.keys(countryList).map((country) => (
          <option key={country} value={country}>
            {countryList[country].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryListSelect;
