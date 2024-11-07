import { Title } from "./Title";
import { Button } from "../ui/button";
import ProductPurchase from "./ProductPurchase";
import { useState, useEffect } from "react";
import useProduct from "../../hooks/useProduct";

export default function Purchase({buy}) {
  const {productSelect} = useProduct()
  const [totalPrice, setTotalPrice] = useState(0);

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

  return (
    <main className="w-2/5">
      <div className="flex flex-col gap-1">
        <div>
          <Title title="Resumen de la compra" />
        </div>
        {buy && (
          <ProductPurchase/>
        )}
        <div className="flex justify-between pt-4">
          <p>Subtotal</p>
          <p>{totalPrice ? "$" + totalPrice + ".000" : "$0.00"}</p>
        </div>
        <div className="flex justify-between">
          <p>Cupon de descuento</p>
          <p>Aplicar cupón</p>
        </div>
        <div className="flex justify-between">
          <p>Envío</p>
          <p>$0.00</p>
        </div>
        <div className="flex justify-between font-semibold">
          {productSelect && productSelect.length > 0 ? (
            <p>Total general ({`${productSelect.length}`} articulo)</p>
          ) : (
            <p>Total general (0 articulos)</p>
          )}
          <p>{totalPrice ? "$" + totalPrice + ".000" : "$0.00"}</p>
        </div>
      </div>
      <div className="flex justify-end pt-5">
        <Button disabled={totalPrice === 0 ? true : false}>
          Proceder al pago
        </Button>
      </div>
    </main>
  );
}
