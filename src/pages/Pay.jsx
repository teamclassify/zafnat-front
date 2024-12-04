import { useQuery } from "react-query";
import PaymentMethod from "../components/custom/PaymentMethod";
import Purchase from "../components/custom/Purchase";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import CartService from "../services/api/CartService";

export default function Pay() {
  const { data, isLoading, isFetching } = useQuery(
    "products-cart",
    CartService.getAll
  );

  return (
    <DefaultTemplate>
      <Title title="Método de pago" />
      <div className="flex flex-row justify-between gap-8">
        <PaymentMethod />
        <Purchase buy={true} data={data} isLoading={isLoading || isFetching} />
      </div>
    </DefaultTemplate>
  );
}
