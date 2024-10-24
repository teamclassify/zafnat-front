import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DialogDisableUser({
  name,
  email,
  open,
  setOpen,
  handleDeleteUser,
}) {
  const onDisable = () => {
    handleDeleteUser(email);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Deshabilitar Usuario</DialogTitle>
          <DialogDescription>
            ¿Estas seguro que quieres deshabilitar el usuario {name}?
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
              Deshabilitar
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
