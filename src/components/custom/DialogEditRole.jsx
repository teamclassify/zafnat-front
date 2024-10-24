import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export function DialogEditRole({name, rol, open, setOpen, handleRoleSelect}) {
  const [selectedRol, setSelectedRol] = useState(rol);

  
  const handleRoleEdit= (deleteRol) => {
    setSelectedRol(selectedRol.filter((r) => r !== deleteRol));
    handleRoleSelect(deleteRol)
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Eliminar Rol</DialogTitle>
          <DialogDescription>{name}</DialogDescription>
        </DialogHeader>
        <div className="flex gap-3">
          {selectedRol.map((role) => (
            <Badge key={role} value={role} variant="secondary">
              <div className="p-2 text-sm">{role}</div>
              <div className="flex justify-end align-top mb-3">
                <X
                  className="w-3 cursor-pointer"
                  onClick={() => handleRoleEdit(role)}
                />
              </div>
            </Badge>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
