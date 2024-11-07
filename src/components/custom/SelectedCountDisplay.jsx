import { Separator } from "@radix-ui/react-dropdown-menu";
import useProduct from "../../hooks/useProduct";
import { CheckBoxProductPay } from "./CheckBoxProductPay";

export default function SelectedCountDisplay() {
  const { selectAll, productSelect } = useProduct();
  return (
    <div className="flex flex-col gap-3">
      <CheckBoxProductPay
        header={true}
        isChecked={selectAll}
        product={productSelect}
      />
      <Separator className="w-2/4" />
    </div>
  );
}
