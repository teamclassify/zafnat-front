import { Checkbox } from "@/components/ui/checkbox";

export function CheckBoxProductPay({ product, isChecked, header }) {
  const handleChange = () => {
    // handleProductSelect(product);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" onCheckedChange={handleChange} checked={isChecked} />
    </div>
  );
}
