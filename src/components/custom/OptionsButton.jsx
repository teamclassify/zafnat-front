import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon } from "lucide-react";
import { useState } from "react";
import { DialogEditRole } from "./DialogEditRole";
import { DialogDeleteUser } from "./DialogDeleteUser";

export function OptionButton({ name, email, rol, handleRoleSelect, handleDeleteUser }) {
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
          <DialogDeleteUser
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
          <EllipsisVerticalIcon color="gray" cursor="pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleOptionSelect("editar")}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleOptionSelect("eliminar")}>
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
