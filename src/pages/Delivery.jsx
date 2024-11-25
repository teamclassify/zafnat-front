import { useQuery } from "react-query";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import DeliveryDetails from "../components/custom/DeliveryDetails";
import Purchase from "../components/custom/Purchase";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import CartService from "../services/api/CartService";

export default function Delivery() {
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
            <DeliveryDetails />
            <Purchase
              buy={true}
              data={data}
              isLoading={isLoading || isFetching}
            />
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
}
