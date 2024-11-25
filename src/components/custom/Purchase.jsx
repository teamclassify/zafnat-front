import { useEffect, useState } from "react";
import PayButton from "./PayButton";
import PurchaseInfo from "./PurchaseInfo";
import PurchaseProduct from "./PurchaseProduct";
import { Title } from "./Title";

export default function Purchase({ buy, data, isLoading }) {
  const [totalPrice, setTotalPrice] = useState(0);

  // if (isLoading) {
  //   return <Skeleton;
  // }

  useEffect(() => {
    if (data && data[0]?.products) {
      const total = data[0].products.reduce((acc, product) => {
        return acc + product.product_sku.price * product.quantity;
      }, 0);

      setTotalPrice(total);
    }
  }, [data]);

  return (
    <main className="w-2/5">
      <div className="flex flex-col gap-1">
        <Title title="Resumen de la compra" />
        <PurchaseProduct open={buy} />
        <PurchaseInfo totalPrice={totalPrice} />
      </div>
      <PayButton buy={buy} totalPrice={totalPrice} />
    </main>
  );
}
