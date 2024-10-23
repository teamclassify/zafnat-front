import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon } from "lucide-react";
import { useState } from "react";
import { DialogCloseButton } from "./Dialog";


export function OptionButton() {
  const [option, setOption] = useState("");

  const handleOptionSelect = (value) => {
    setOption(value);
  };

  return (
    <>
     <div>{option && <DialogCloseButton />}</div>
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
