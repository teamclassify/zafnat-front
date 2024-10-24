import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FilterIcon } from "lucide-react";

export default function Filter({ options, handleRoleSelect }) {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleCheckboxChange = (role) => {
    let newSelectedRoles = [];
    if (selectedRoles.includes(role)) {
      newSelectedRoles = selectedRoles.filter((r) => r !== role);
    } else {
      newSelectedRoles = [...selectedRoles, role];
    }

    setSelectedRoles(newSelectedRoles);
    handleRoleSelect(newSelectedRoles);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <div className="flex gap-2">
            <FilterIcon className="w-4" />
            Filtrar {selectedRoles.length > 0 && `(${selectedRoles.length})`}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Seleccionar Roles</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((role) => (
          <DropdownMenuCheckboxItem
            key={role}
            checked={selectedRoles.includes(role)}
            onCheckedChange={() => handleCheckboxChange(role)}
          >
            {role}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
