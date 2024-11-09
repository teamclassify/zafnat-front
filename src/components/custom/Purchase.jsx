import { Title } from "./Title";
import useCalculateProductPrice from "../../hooks/useCalculateProductPrice";
import PayButton from "./PayButton";
import PurchaseProduct from "./PurchaseProduct";
import PurchaseInfo from "./PurchaseInfo";

export default function Purchase({ buy }) {
  const { totalPrice } = useCalculateProductPrice();

  return (
    <main className="w-2/5">
      <div className="flex flex-col gap-1">
        <Title title="Resumen de la compra" />
        <PurchaseProduct open={buy} />
        <PurchaseInfo />
      </div>
      <PayButton buy={buy} totalPrice={totalPrice} />
    </main>
  );
}
