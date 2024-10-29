import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxDemo({ name, onChange, filter }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" onCheckedChange={(isChecked) => onChange(name, isChecked, filter)} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {name}
      </label>
    </div>
  );
}
