import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectOption({ rol, title }) {
  return (
    <Select>
      <SelectTrigger id="roles">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <div>
          {rol.map((role) => (
            <SelectItem key={role} value={role}>
              <div className="flex gap-2 items-center">{role}</div>
            </SelectItem>
          ))}
        </div>
      </SelectContent>
    </Select>
  );
}
