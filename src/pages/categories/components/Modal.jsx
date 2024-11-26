import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { useState } from "react";
import EditCategory from "./EditCategory";

export function Modal({ isOpen, setIsOpen, data }) {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Detalles</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {Object.entries(data).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <p>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
                  {value}
                </p>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button>Deshabilitar</Button>
            <Button variant={"outline"} onClick={() => setOpenDialog(true)}>
              Editar
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <EditCategory isOpen={openDialog} setIsOpen={setIsOpen} data={data} />
    </>
  );
}
