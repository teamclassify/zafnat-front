import { createContext, useState } from "react";

export const CatalogContext = createContext();

export function CatalogProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  const value = {
    colors,
    sizes,
    categories,
    setColors,
    setSizes,
    setCategories,
  };

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
}
