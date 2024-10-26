import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectOption({ rol, title, handleRoleSelect }) {
  return (
    <Select onValueChange={handleRoleSelect}>
      <SelectTrigger id="roles">
        <SelectValue placeholder={title}>{title}</SelectValue>
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
