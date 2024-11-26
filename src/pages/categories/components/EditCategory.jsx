import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner";

export default function EditCategory({ isOpen, setIsOpen, data }) {
  const [formData, setFormData] = useState(data);

  const handleChange = (key, value) => {
    if (key === "id") return;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setIsOpen(false);
    toast.success("Se ha modificado con exito la categoría")
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
              ) : key === "estado" ? (
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Selecciona un estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Habilitado">Habilitado</SelectItem>
                      <SelectItem value="Deshabilitado">
                        Deshabilitado
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
