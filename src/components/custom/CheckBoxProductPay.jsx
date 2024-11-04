import { Checkbox } from "@/components/ui/checkbox";

export function CheckBoxProductPay({
  product,
  name,
  handleProductSelect,
  isChecked,
}) {
  
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        onCheckedChange={() => handleProductSelect(product)}
        checked={isChecked}
      />
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {name}
      </label>
    </div>
  );
}
