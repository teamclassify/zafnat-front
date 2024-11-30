import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FilterIcon } from "lucide-react";
import { useState } from "react";

export default function Filter({ options, handleSelect, title }) {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleCheckboxChange = (role) => {
    let newSelectedRoles = [];

    // if (selectedRoles.includes(role)) {
    //   newSelectedRoles = selectedRoles.filter((r) => r !== role);
    // } else {
    //   newSelectedRoles = [...selectedRoles, role];
    // }

    newSelectedRoles = [role];

    setSelectedRoles(newSelectedRoles);
    handleSelect(newSelectedRoles);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <div className="flex gap-2 items-center">
            <FilterIcon className="w-4" />
            Filtrar {selectedRoles.length > 0 && `(${selectedRoles.length})`}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((role) => (
          <DropdownMenuCheckboxItem
            key={role.name}
            /*className="uppercase"*/
            checked={selectedRoles.includes(role.name)}
            onCheckedChange={() => handleCheckboxChange(role.name)}
          >
            {role.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
