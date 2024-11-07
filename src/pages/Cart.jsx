import DefaultTemplate from "../components/templates/DefaultTemplate";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import Purchase from "../components/custom/Purchase";
import ProductCartGrid from "../components/custom/ProductCartGrid";
import SelectedCountDisplay from "../components/custom/SelectedCountDisplay";

export default function Cart() {
  return (
    <DefaultTemplate>
      <main>
        <BreadcrumbResponsive />
        <div className="pt-5">
          <SelectedCountDisplay />
          <div className="flex flex-row justify-between ">
            <ProductCartGrid />
            <Purchase />
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
}
