import { useState, useEffect} from "react";
import useProduct from "./useProduct";

export default function useCalculateProductPrice(){
  const [totalPrice, setTotalPrice] = useState(0);
  const { productSelect } = useProduct();

  useEffect(() => {
    if (productSelect && productSelect.length > 0) {
      const handlePrice = () => {
        let price = 0;
        productSelect.forEach((product) => (price += product.price));
        setTotalPrice(price);
      };
      handlePrice();
    } else {
      setTotalPrice(0);
    }
  }, [productSelect]);

  return {totalPrice, productSelect}
}