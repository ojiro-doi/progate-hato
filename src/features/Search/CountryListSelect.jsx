import React from "react";
import { memo } from "react";
import { countryList } from "./CountryList";
import { CountryContext } from "../../Context/CountryProvider";

const CountryListSelect = memo(() => {
  const { selectedCountry, setSelectedCountry } =
    React.useContext(CountryContext);

  return (
    <div>
      <select
        value={selectedCountry.name}
        onChange={(e) => {
          console.log("e.target.value: ", e.target.value);
          console.log(
            "countryList[e.target.value].name: ",
            countryList[e.target.value].name
          );
          setSelectedCountry(countryList[e.target.value].name);
          setSelectedCountry({
            lat: countryList[e.target.value].lat,
            lng: countryList[e.target.value].lng,
          });
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
