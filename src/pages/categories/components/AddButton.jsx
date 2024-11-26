import { IoAddCircleOutline } from "react-icons/io5";
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function AddButton() {
  const handleSave = () => {
    toast.success("Se ha creado la categoria exitosamente");
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <IoAddCircleOutline />
          Agregar Categoria
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agregar Categoria</DialogTitle>
          <DialogDescription>
            Ingrese la información requerida para crear la categoria
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nombre
            </Label>
            <Input
              id="name"
              defaultValue="Categoria 1"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Descripción
            </Label>
            <Input id="description" defaultValue=".." className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="submit" onClick={() => handleSave()}>
              Guardar cambios
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
