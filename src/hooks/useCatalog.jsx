import { useContext } from "react";

import { CatalogContext } from "../context/CatalogContext";

function useCatalog() {
  const context = useContext(CatalogContext);

  return {
    ...context,
  };
}

export default useCatalog;
