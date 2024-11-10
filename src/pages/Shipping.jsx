import { PaymentMethod } from "../components/custom/PaymentMethod";
import Purchase from "../components/custom/Purchase";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";

export default function Shipping() {
  return (
    <DefaultTemplate>
      <Title title={"Metodo de envío"} />
      <div className="flex flex-row justify-between gap-3">
        <PaymentMethod />
        <Purchase buy={true} />
      </div>
    </DefaultTemplate>
  );
}
