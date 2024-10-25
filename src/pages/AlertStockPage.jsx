import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function AlertStockPage() {
  return (
    <>
      <AdminTemplate>
        <div>
          <h3 className="scroll-m-20 pb-2 pt-6 text-2xl font-semibold tracking-tight first:mt-0 text-slate-700">
            Ajustes de Inventario
          </h3>
          <div className="flex justify-between gap-4 pt-4">
            <div>
              <h2 className="font-medium">Alerta bajo Stock</h2>
              <p className=" text-gray-800">
                Configura el valor minimo de stock de los productos para alertar
                los empleados correspondientes.
              </p>
            </div>
            <Card className="p-7">
              <div className="flex flex-col w-80 gap-2 ">
                <Label>Valor *</Label>
                <Input type="number" placeholder="0" />
              </div>
            </Card>
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
