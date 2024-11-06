import DefaultTemplate from "../components/templates/DefaultTemplate";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import { Separator } from "@/components/ui/separator";
import Purchase from "../components/custom/Purchase";
import { CheckBoxProductPay } from "../components/custom/CheckBoxProductPay";
import useProductSelect from "../hooks/useProductSelect";
import ProductCartGrid from "../components/custom/ProductCartGrid";

export default function Cart() {
  /*
  const {
    handleDisableProduct,
    handleProductSelect,
    handleSelectAll,
    size,
    products,
    selectAll,
    productSelect,
  } = useProductSelect();
   */

  return (
    <DefaultTemplate>
      <main>
        <BreadcrumbResponsive />
        <div className="pt-5">
          <div className="flex flex-col gap-3">
            <CheckBoxProductPay header={true} />
            <Separator className="w-2/4" />
          </div>

          <div className="flex flex-row justify-between ">
            <ProductCartGrid
              
            />
            
          
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
}
