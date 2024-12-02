import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [address, setAddress] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);
  const [invoiceId, setInvoiceId] = useState(null);

  const value = useMemo(() => {
    return {
      products,
      setProducts,
      address,
      setAddress,
      preferenceId,
      setPreferenceId,
      invoiceId,
      setInvoiceId,
    };
  }, [products, address, preferenceId, invoiceId]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
