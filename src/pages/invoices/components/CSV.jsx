import { FilesIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useState } from "react";
import { ModalCSV } from "./ModalCSV";

export default function CSV() {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <>
      <Button variant="outline" onClick={openModal}>
        <div className="flex gap-2 items-center">
          <FilesIcon />
          Generar CSV
        </div>
      </Button>

      <ModalCSV
        isOpen={open}
        setIsOpen={setOpen}
        onCancel={closeModal}
        onConfirm={closeModal}
      />
    </>
  );
}
