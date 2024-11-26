import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Input } from "@/components/ui/input"; // Asegúrate de tener este componente de entrada

export default function EditCategory({ isOpen, setIsOpen, data, onSave }) {
  const [formData, setFormData] = useState(data);

  const handleChange = (key, value) => {
    if (key === "id") return; // No permitimos modificar el id
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Editar Categoría</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <label>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
              </label>
              {key === "id" ? (
                <p>{value}</p> 
              ) : (
                <Input
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Guardar</Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
