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

export function DialogCloseButton() {
  const [open, setOpen] = useState(true);
  const [rol, setRol] = useState(["Administrador", "Ventas"]);

  const handleRoleSelect = (selectRol) => {
    setRol(rol.filter((r) => r !== selectRol));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Eliminar Rol</DialogTitle>
          <DialogDescription>Gianfranco Daniele</DialogDescription>
        </DialogHeader>
        <div className="flex gap-3">
          {rol.map((role) => (
            <Badge key={role} value={role} variant="secondary">
              <div className="p-2 text-sm">{role}</div>
              <div className="flex justify-end align-top mb-3">
                <X
                  className="w-3 cursor-pointer"
                  onClick={() => handleRoleSelect(role)}
                />
              </div>
            </Badge>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
