import React from 'react'
import { Link } from 'react-router-dom'
import CountryList from './CountryList'
import { CountryContext } from '../../Context/CountryProvider'


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
        <div className="ml-20 flex justify-center">
          <div className="bg-amber-500 text-5xl text-black text-center px-10 py-5 mx-20 my-10 rounded-full flex justify-center items-center">
            <select className="text-center" onChange={handleCountryChange}>
              {CountryList.map((country, index) => (
                <option key={index} value={JSON.stringify(country)}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
            <div className="bg-amber-500 hover:bg-green-700 text-5xl text-black text-center px-10 py-5 mx-20 my-10 rounded-full flex justify-center items-center">
              <Link to="/result" className="ml-4" onClick={handleButtonClick}>
                決定
              </Link>
            </div>
        </div>
      </div>
  )
}

export default SelectList