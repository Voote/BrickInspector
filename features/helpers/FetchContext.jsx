import React, { createContext, useContext, useState } from 'react';

export const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const [shouldFetch, setShouldFetch] = useState(false);

  return (
    <FetchContext.Provider value={{ shouldFetch, setShouldFetch }}>
      {children}
    </FetchContext.Provider>
  );
};

export const useFetch = () => {
  const context = useContext(FetchContext);
  if (!context) {
    throw new Error('useFetch must be used within a FetchProvider');
  }
  return context;
};
