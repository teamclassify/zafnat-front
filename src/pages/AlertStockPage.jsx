import { useState } from "react";
import { toast } from "react-toastify";
import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Title } from "../components/custom/Title";
import { useStockAlerts } from "../hooks/useStockAlerts";

export default function AlertStockPage() {
  const { minStock, setMinStock } = useStockAlerts(15);
  const [inputMinStock, setInputMinStock] = useState(minStock);

  const handleMinStockChange = (e) => {
    const newMinStock = parseInt(e.target.value) || 0;
    setInputMinStock(newMinStock);
  };

  const handleSetMinStock = () => {
    setMinStock(inputMinStock);
    toast.info(`Stock mínimo actualizado a ${inputMinStock}`);
  };

  return (
    <AdminTemplate>
      <div>
        <Title title="Ajustes de Inventario" />
        <div className="flex justify-between pt-2 w-4/5">
          <div>
            <h2 className="font-medium">Alerta bajo Stock</h2>
            <p className="text-gray-800">
              Configura el valor mínimo de stock de los productos para alertar
              a los empleados.
            </p>
          </div>
          <Card className="p-7">
            <div className="flex flex-col w-80 gap-4">
              <Label htmlFor="min-stock">Stock mínimo *</Label>
              <Input
                id="min-stock"
                type="number"
                value={inputMinStock}
                onChange={handleMinStockChange}
              />
              <Button onClick={handleSetMinStock}>Establecer</Button>
            </div>
          </Card>
        </div>
      </div>
    </AdminTemplate>
  );
}
