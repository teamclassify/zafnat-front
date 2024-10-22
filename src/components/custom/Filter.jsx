import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, FilterIcon } from "lucide-react";

const roles = ["Administrador", "Ventas", "Almacen", "Marketing"];

export default function Filter() {
  const [selectedRole, setSelectedRole] = useState([]);

  const handleRoleSelect = (rol) => {
    selectedRole.includes(rol)
      ? setSelectedRole(selectedRole.filter((r) => r !== rol))
      : setSelectedRole([...selectedRole, rol]);
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded="true"
            className="w-[200px] justify-between"
          >
            <div className="flex items-center gap-2">
              <FilterIcon width={"25%"} />
              Filtrar
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <div className="p-4 space-y-4">
            <div>
              {roles.map((role) => (
                <div
                  key={role}
                  onClick={() => handleRoleSelect(role)}
                  className={`cursor-pointer p-2 m-1 rounded-md flex items-center justify-between ${
                    selectedRole.includes(role)
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {role}
                  {selectedRole.includes(role) && (
                    <Check className="inline h-4 w-4 text-slate-800" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
