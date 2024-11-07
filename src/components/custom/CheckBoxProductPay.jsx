import { Checkbox } from "@/components/ui/checkbox";
import useProduct from "../../hooks/useProduct";

export function CheckBoxProductPay({ product, isChecked, header }) {
  const { size, handleProductSelect, handleSelectAll} = useProduct();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        onCheckedChange={() => header ? handleSelectAll(product) : handleProductSelect(product)}
        checked={isChecked}
      />
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {header &&
          size +
            (size === 1 ? " prenda seleccionada" : " prendas seleccionadas")}
      </label>
    </div>
  );
}
