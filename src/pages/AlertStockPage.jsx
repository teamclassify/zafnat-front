import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Title } from "../components/custom/Title";
import AlertNotification from "../components/custom/AlertNotifications";
import { useStockAlerts } from "../hooks/useStockAlerts";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AlertStockPage() {
  const { alerts, minStock, setMinStock } = useStockAlerts();
  const [inputMinStock, setInputMinStock] = useState(minStock);

  const handleMinStockChange = (e) => {
    const newMinStock = parseInt(e.target.value);
    if (!isNaN(newMinStock)) {
      setInputMinStock(newMinStock);
    }
  };

  const handleSetMinStock = () => {
    setMinStock(inputMinStock); // Establece el nuevo valor de minStock
    toast.info(`El valor de stock mínimo ha sido actualizado a ${inputMinStock}`);
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
              a los empleados correspondientes.
            </p>
          </div>
          <Card className="p-7">
            <div className="flex flex-col w-80 gap-4">
              <Label>Valor *</Label>
              <Input
                id="min-stock"
                type="number"
                value={inputMinStock}
                onChange={handleMinStockChange}
                className="border p-1 rounded"
              />
              <div className="flex flex-row justify-end">
                <Button onClick={handleSetMinStock}>Establecer</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Mostrar componente de alertas */}
        <AlertNotification alerts={alerts} />
      </div>
    </AdminTemplate>
  );
}
