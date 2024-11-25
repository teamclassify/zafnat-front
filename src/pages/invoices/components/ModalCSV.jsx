import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
export function ModalCSV({ isOpen, setIsOpen, onCancel, onConfirm }) {
  const [editableMessage, setEditableMessage] = useState("");

  const handleCancel = () => {
    onCancel();
    toast.error("Se ha cancelado la notificación al cliente");
  };

  const handleSave = () => {
    toast.success("Se ha enviado la notificación al cliente");
    onConfirm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Generar CSV</DialogTitle>
          <DialogDescription>
            Modifica el mensaje antes de enviarlo al cliente.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            value={editableMessage}
            onChange={(e) => setEditableMessage(e.target.value)}
            rows={10}
            className="w-full"
          />
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Enviar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
