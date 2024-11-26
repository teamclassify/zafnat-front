import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";

export default function DisableState({ isOpen, setIsOpen, data, name }) {

  const handleAccept = () => {
    toast.success(`Se ha ${data.estado === "Habilitado" ? "Deshabilitado" : "Habilitalo"} la categoria ${data.nombre}`)
    setIsOpen(false)
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Deshabilitar Categoria</DialogTitle>
        </DialogHeader>
        ¿Estas seguro que quieres {name} la categoria: {data.nombre}?
        
        <DialogFooter>
          <Button onClick={() => handleAccept()}>Confirmar</Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
