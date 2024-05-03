import { useState, useEffect} from 'react';
import { countryList } from '../components/CountryList';
import CountryListSelect from '../components/CountryListSelect';
import { PresWiki } from '../components/PresWiki';
import Map from '../components/Map';  

function Result() {

  const [countryName, setCountryName] = useState('');
  const [center, setCenter] = useState({ lat: 35.68, lng: 139.76 });

  useEffect(() => {
    const randomCountry = countryList[Math.floor(Math.random() * countryList.length)];
    setCountryName(randomCountry.name);
    setCenter({ lat: randomCountry.lat, lng: randomCountry.lng });
  }, []); //初回レンダリング時のみ実行->空の配列を渡す


  return (
    <div>
      <CountryListSelect countryName={countryName} setCountryName={setCountryName} setCenter={setCenter}/>
      <Map countryName={countryName} center={center} />
      <PresWiki countryName={countryName}/>
    </div>
  );
}

export default Result;
