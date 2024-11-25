import { Button } from "@/components/ui/button";
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

export function Format() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="none" className="font-semibold text-xs text-blue-950">
          Formato del Archivo CSV
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>Formato del archivo CSV</DialogTitle>
          <DialogDescription>
            Asegúrate de que el archivo cumpla con este formato antes de subirlo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Número de Orden</th>
                <th className="border border-gray-300 px-4 py-2">Fecha</th>
                <th className="border border-gray-300 px-4 py-2">Categoría</th>
                <th className="border border-gray-300 px-4 py-2">Ref</th>
                <th className="border border-gray-300 px-4 py-2">Nombre</th>
                <th className="border border-gray-300 px-4 py-2">Subcategoría</th>
                <th className="border border-gray-300 px-4 py-2">Talla</th>
                <th className="border border-gray-300 px-4 py-2">Color</th>
                <th className="border border-gray-300 px-4 py-2">Cantidad</th>
                <th className="border border-gray-300 px-4 py-2">Precio</th>
              </tr>
            </thead>
          </table>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" >
              Aceptar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
