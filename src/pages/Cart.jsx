import DefaultTemplate from "../components/templates/DefaultTemplate";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import { Separator } from "@/components/ui/separator";
import Purchase from "../components/custom/Purchase";
import { CheckBoxProductPay } from "../components/custom/CheckBoxProductPay";
import ProductCartGrid from "../components/custom/ProductCartGrid";
import useProduct from "../hooks/useProduct";

export default function Cart() {
  const { selectAll, productSelect } = useProduct();

  return (
    <DefaultTemplate>
      <main>
        <BreadcrumbResponsive />
        <div className="pt-5">
          <div className="flex flex-col gap-3">
            <CheckBoxProductPay
              header={true}
              isChecked={selectAll}
              product={productSelect}
            />
            <Separator className="w-2/4" />
          </div>
          <div className="flex flex-row justify-between ">
            <ProductCartGrid />
            <Purchase />
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
}
