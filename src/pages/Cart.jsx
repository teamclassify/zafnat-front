import { useQuery } from "react-query";
import CartService from "../services/api/CartService";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import ProductCartGrid from "../components/custom/ProductCartGrid";
import Purchase from "../components/custom/Purchase";
import DefaultTemplate from "../components/templates/DefaultTemplate";

export default function Cart() {
  const { data, isLoading, isFetching } = useQuery(
    "products-cart",
    CartService.getAll
  );

  return (
    <DefaultTemplate>
      <main>
        <BreadcrumbResponsive />
        <div className="pt-5">
          <div className="flex flex-row justify-between ">
            <ProductCartGrid data={data} isLoading={isLoading || isFetching} />
            <Purchase
              buy={false}
              data={data}
              isLoading={isLoading || isFetching}
            />
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
}
