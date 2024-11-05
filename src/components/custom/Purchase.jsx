import { Title } from "./Title";
import { Button } from "../ui/button";
//import ProductPurchase from "./ProductPurchase";
import { useState, useEffect } from "react";

export default function Purchase({
  //buy,
  //name,
  //price,
  //quantity,
  //image,
  products,
}) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products && products.length > 0) {
      const handlePrice = () => {
        let price = 0;
        products.forEach((product) => (price += product.price));
        setTotalPrice(price);
      };
      handlePrice();
    } else {
      setTotalPrice(0);
    }
  }, [products]);

  return (
    <main className="w-2/5">
      <div className="flex flex-col gap-1">
        <div>
          <Title title="Resumen de la compra" />
        </div>
        {/*buy && (
          <ProductPurchase
            name={name}
            price={price}
            quantity={quantity}
            image={image}
          />
        )*/}
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
          {products && products.length > 0 ? (
            <p>Total general ({`${products.length}`} articulo)</p>
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
