import { useQuery } from "react-query";
import InfoDirection from "../components/custom/InfoDirection";
import Purchase from "../components/custom/Purchase";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import CartService from "../services/api/CartService";

export default function Location() {
  const { data, isLoading, isFetching } = useQuery(
    "products-cart",
    CartService.getAll
  );

  return (
    <DefaultTemplate>
      <Title title="Dirección" />
      <div className="flex flex-row justify-between">
        <InfoDirection />
        <Purchase buy={true} data={data} isLoading={isLoading || isFetching} />
      </div>
    </DefaultTemplate>
  );
}
