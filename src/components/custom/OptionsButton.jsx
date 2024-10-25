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
    setOpenDialog(true);
  };

  return (
    <>
      <div>
        {option === "editar" && (
          <DialogEditRole
            name={name}
            rol={rol}
            handleRoleSelect={handleRoleSelect}
            open={openDialog}
            setOpen={setOpenDialog}
          />
        )}

        {option === "eliminar" && (
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
          <DropdownMenuItem onClick={() => handleOptionSelect("editar")}>
            Editar
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => handleOptionSelect("eliminar")}>
            Deshabilitar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
