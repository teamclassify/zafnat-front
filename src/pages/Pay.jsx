import PaymentMethod from "../components/custom/PaymentMethod";
import Purchase from "../components/custom/Purchase";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";

export default function Pay() {
  return (
    <DefaultTemplate>
      <Title title="Método de pago" />
      <div className="flex flex-row justify-between">
        <PaymentMethod />
        <Purchase buy={true} />
      </div>
    </DefaultTemplate>
  );
}
