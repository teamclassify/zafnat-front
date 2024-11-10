import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function InputField({title, placeholder, type}) {
  return (
    <div className="flex flex-col gap-2 ">
      <Label>{title}</Label>
      <Input type={type} placeholder={placeholder} />
    </div>
  );
}
