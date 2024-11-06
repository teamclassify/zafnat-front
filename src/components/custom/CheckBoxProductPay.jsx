import { Checkbox } from "@/components/ui/checkbox";
import useProduct from "../../hooks/useProduct";

export function CheckBoxProductPay({
  //product,
  // name,
  //handleProductSelect,
  //isChecked,
  header,
}) {
  const { product, size, handleProductSelect, selectAll } = useProduct();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        onCheckedChange={() => handleProductSelect(product)}
        checked={selectAll}
      />
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {header &&
          size +
            (size === 1 ? " prenda seleccionada" : " prendas seleccionadas")}
      </label>
    </div>
  );
}
