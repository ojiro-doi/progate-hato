import React, { createContext,useState } from 'react';
import CountryList from "../features/Search/CountryList";

export const CountryContext = createContext({
  selectedCountry: { name: '' }, // デフォルト値を設定
  setSelectedCountry: () => {},
});

export const CountryProvider = ({ children }) => {
    const [selectedCountry, setSelectedCountry] = useState(CountryList[0]); // 初期値を設定

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
