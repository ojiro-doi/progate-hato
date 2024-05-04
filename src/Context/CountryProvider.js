import React, { useState } from 'react';
import { CountryContext } from './CountryContext';

export const CountryProvider = ({ children }) => {
    const [selectedCountry, setSelectedCountry] = useState({ name: '' }); // 初期値を設定

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};