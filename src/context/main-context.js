import React, { createContext, useContext, useEffect, useState } from "react";
import ProductAPI from "../modules/ProductAPI";

// Create a context
const MainContext = createContext();

// Create a provider component
export const MainProvider = ({ children }) => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getAllProducts() {
    const result = await ProductAPI.getAllProduct();
    setValue(result);
    setLoading(false);
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <MainContext.Provider value={{ loading, value, setValue, getAllProducts }}>
      {children}
    </MainContext.Provider>
  );
};

// Custom hook to use the context
export const useMainContext = () => {
  return useContext(MainContext);
};
