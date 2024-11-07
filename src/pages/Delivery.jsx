import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import DeliveryDetails from "../components/custom/DeliveryDetails";
import Purchase from "../components/custom/Purchase";
import DefaultTemplate from "../components/templates/DefaultTemplate";

export default function Delivery() {
  return (
    <DefaultTemplate>
      <main>
        <BreadcrumbResponsive />
        <div className="pt-5">
          <div className="flex flex-row justify-between ">
            <DeliveryDetails />
            <Purchase buy={true}/>
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
}
