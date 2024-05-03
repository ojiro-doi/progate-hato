import React from 'react';
import { memo } from 'react';
import { countryList } from '../components/CountryList';

const CountryListSelect = memo(({ countryName, setCountryName, setCenter }) => {

  return (
    <div>
      <select
        value={countryName}
        onChange={(e) => {
          console.log('e.target.value: ', e.target.value);  
          console.log('countryList[e.target.value].name: ', countryList[e.target.value].name);
          setCountryName(countryList[e.target.value].name);
          setCenter({ lat: countryList[e.target.value].lat, lng: countryList[e.target.value].lng });
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
});

export default CountryListSelect;
