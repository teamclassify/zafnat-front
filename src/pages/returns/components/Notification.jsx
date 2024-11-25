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
import { useState, useEffect } from "react";
import { toast } from "sonner";
export function DialogNotification({
  isOpen,
  setIsOpen,
  details,
  status,
  onCancel,
  onConfirm,
}) {
  const [editableMessage, setEditableMessage] = useState("");

  useEffect(() => {
    if (details && status) {
      setEditableMessage(
        `Estimado(a) ${details.customer},

Te informamos que el estado de tu solicitud de devolución con el número de referencia ${details.returnId} ha cambiado a: ${status}.

Detalles del Producto:
- Producto: ${details.returnedProduct.type} - ${details.returnedProduct.color}, Talla ${details.returnedProduct.size}
- Fecha de solicitud: ${details.date}
- Motivo de la devolución: ${details.reason}

Instrucciones:
${details.instructions}

Gracias por confiar en nosotros.`
      );
    }
  }, [details, status]);

  const handleCancel = () => {
    onCancel(); 
    toast.error("Se ha cancelado la notificación al cliente")
  };

  const handleSave = () => {
    toast.success("Se ha enviado la notificación al cliente")
    onConfirm(); 
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Editar Notificación</DialogTitle>
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
