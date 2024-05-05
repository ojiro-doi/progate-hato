import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const PresWiki = ({ selectedCountry }) => {
  const [countryInfo, setCountryInfo] = useState('');
  console.log('selectedCountry: ', selectedCountry);  

  useEffect(() => {
    const fetchCountryInfo = async () => {
      const response = await axios.get('https://ja.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          prop: 'extracts',
          exintro: true,
          explaintext: true,
          format: 'json',
          origin: '*',
          titles: selectedCountry
        }
      });

      if (response.data && response.data.query && response.data.query.pages) {
        const pages = response.data.query.pages;
        const pageId = Object.keys(pages)[0];
        const countryInfo = pages[pageId].extract;

        setCountryInfo(countryInfo);
      } else {
        console.error('Invalid response from Wikipedia API:', response);
      }
    };

    fetchCountryInfo();
  }, [selectedCountry]);

  return (
    <div className="p-8">
      <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{selectedCountry}</h1>
      <p className="mt-2 text-gray-500">{countryInfo}</p>
    </div>
  );
}