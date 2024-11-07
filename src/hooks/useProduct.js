import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

function useProduct() {
  const context = useContext(ProductContext);

  return {
    ...context,
  };
}

export default useProduct;
