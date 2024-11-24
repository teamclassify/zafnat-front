// OptionButton.js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiDotsVertical } from "react-icons/hi";

import { useState } from "react";
import { DialogDisableUser } from "./DialogDisableUser";
import { DialogEditRole } from "./DialogEditRole";

export function OptionButton({
  options,
  setStatus,
  name,
  email,
  rol,
  handleRoleSelect,
  handleDeleteUser,
}) {
  const [option, setOption] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOptionSelect = (value) => {
    setOption(value);
    setStatus(value); // Actualiza el estado del status en CardReturn
    setOpenDialog(true);
  };

  return (
    <>
      <div>
        {option === "Editar" && (
          <DialogEditRole
            name={name}
            rol={rol}
            handleRoleSelect={handleRoleSelect}
            open={openDialog}
            setOpen={setOpenDialog}
          />
        )}

        {option === "Eliminar" && (
          <DialogDisableUser
            name={name}
            email={email}
            open={openDialog}
            setOpen={setOpenDialog}
            handleDeleteUser={handleDeleteUser}
          />
        )}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <HiDotsVertical />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {options.map((optionSelect) => {
            return (
              <DropdownMenuItem
                key={optionSelect}
                onClick={() => handleOptionSelect(optionSelect)}
              >
                {optionSelect}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
