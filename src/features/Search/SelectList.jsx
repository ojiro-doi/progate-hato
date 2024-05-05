import React from "react";
import { Link } from "react-router-dom";
import CountryList from "./CountryList";
import { CountryContext } from "../../Context/CountryProvider";

const SelectList = () => {
  const { setSelectedCountry } = React.useContext(CountryContext);
  const [selectedCountryInfo, setSelectedCountryInfo] = React.useState(null);

  const handleCountryChange = (event) => {
    try {
      const countryInfo = JSON.parse(event.target.value);
      setSelectedCountryInfo(countryInfo);
    } catch (error) {
      console.error(`Invalid JSON: ${event.target.value}`);
    }
  };
  const handleButtonClick = () => {
    if (selectedCountryInfo) {
      setSelectedCountry({
        name: selectedCountryInfo.name,
        lat: selectedCountryInfo.lat,
        lng: selectedCountryInfo.lng,
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-amber-500 text-5xl text-black text-center px-10 py-5 mx-20 my-10 rounded-full flex justify-center items-center">
          <select
            className="text-center text-white bg-amber-500"
            onChange={handleCountryChange}
          >
            {CountryList.map((country, index) => (
              <option key={index} value={JSON.stringify(country)}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="h-20 w-50 px-6 m-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-lg text-sm text-emerald-950 md:font-bold px-5 py-2.5 text-center me-2 mb-2">
          <Link to="/result">決定　　　　</Link>
        </button>
      </div>
    </div>
  );
};

export default SelectList;
