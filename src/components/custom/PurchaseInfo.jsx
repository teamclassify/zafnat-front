import useCalculateProductPrice from "../../hooks/useCalculateProductPrice";
import InformationGeneralProducts from "./InformationGeneralProducst";
import InformationPurchase from "./InformationPurchase";

export default function PurchaseInfo() {
  const { totalPrice } = useCalculateProductPrice();
  return (
    <div>
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
  );
}
