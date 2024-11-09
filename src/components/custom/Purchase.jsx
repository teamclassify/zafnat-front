import { Title } from "./Title";
import useCalculateProductPrice from "../../hooks/useCalculateProductPrice";
import PayButton from "./PayButton";
import PurchaseProduct from "./PurchaseProduct";
import InformationPurchase from "./InformationPurchase";
import InformationGeneralProducts from "./InformationGeneralProducst";

export default function Purchase({ buy }) {
  const { totalPrice } = useCalculateProductPrice();

  return (
    <main className="w-2/5">
      <div className="flex flex-col gap-1">
        <Title title="Resumen de la compra" />
        <PurchaseProduct open={buy} />
        <InformationPurchase
          name={"Subtotal"}
          value={totalPrice ? "$" + totalPrice + ".000" : "$0.00"}
        />
        <InformationPurchase
          name={"Cupón de descuento"}
          value={"Aplicar cupón"}
        />
        <InformationPurchase name={"Envío"} value={"$0.00"} />
        <InformationGeneralProducts />
      </div>
      <PayButton buy={buy} totalPrice={totalPrice} />
    </main>
  );
}
