import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

export function DialogDisableProduct({
  open,
  setOpen,
  handleDisableProduct,
  product
}) {
  
  const onDisable = () => {
    handleDisableProduct(product);
    toast.success('Se ha eliminado el producto del carrito de compras')
    setOpen(false);
  };
  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Eliminar Producto</DialogTitle>
          <DialogDescription>
            ¿Estas seguro que quieres eliminar el articulo {product.name}?
          </DialogDescription>
          <DialogFooter className="sm:justify-end pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button type="button" variant="destructive" onClick={onDisable}>
              Eliminar
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
