import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Title } from "../components/custom/Title";

export default function AlertStockPage() {
  return (
    <>
      <AdminTemplate>
        <div>
          <Title title="Ajustes de Inventario" />
          <div className="flex justify-between pt-2 w-4/5">
            <div>
              <h2 className="font-medium">Alerta bajo Stock</h2>
              <p className=" text-gray-800">
                Configura el valor minimo de stock de los productos para alertar
                los empleados correspondientes.
              </p>
            </div>
            <Card className="p-7">
              <div className="flex flex-col w-80 gap-4 ">
                <Label>Valor *</Label>
                <Input type="number" placeholder="0" />
                <div className="flex flex-row justify-end">
                  <Button>Establecer</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
