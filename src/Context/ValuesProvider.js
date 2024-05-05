import React, { createContext,useState } from 'react';


export const ValuesContext = createContext({
  values: {
    amount: "¥100,000",
    days: "1泊",
    people: "1人",
  },
  setValues: () => {},
});
  

export const ValuesProvider = ({ children }) => {
  const [values, setValues] = useState({
    amount: "¥100,000",
    days: "1泊",
    people: "1人",
  });


  return (
    <ValuesContext.Provider value={{values, setValues}}>
      {children}
    </ValuesContext.Provider>
  );
};
