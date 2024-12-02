import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function useCart() {
  const content = useContext(CartContext);

  return {
    products: content.products,
    setProducts: content.setProducts,
    address: content.address,
    setAddress: content.setAddress,
    preferenceId: content.preferenceId,
    setPreferenceId: content.setPreferenceId,
    invoiceId: content.invoiceId,
    setInvoiceId: content.setInvoiceId,
  };
}

export default useCart;
