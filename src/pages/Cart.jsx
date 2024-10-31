import DefaultTemplate from "../components/templates/DefaultTemplate";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import { CheckboxDemo } from "../components/custom/CheckBoxDemo";
import { Separator } from "@/components/ui/separator";
import ProductCart from "../components/custom/ProductCart";
import Purchase from "../components/custom/Purchase";

export default function Cart() {
  return (
    <DefaultTemplate>
      <main>
        <BreadcrumbResponsive />
        <div className="pt-5">
          <div className="flex flex-col gap-3">
            <CheckboxDemo name="0 prendas seleccionada"></CheckboxDemo>
            <Separator className="w-2/4" />
          </div>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col gap-4 w-2/4">
              <ProductCart />
              <ProductCart />
            </div>
            <Purchase />
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
}
