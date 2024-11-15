import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Title } from "../components/custom/Title";

export default function Content() {
  return (
    <>
      <AdminTemplate>
        <div>
          <Title title="Ajustes de Contenido" />
          <div className="flex justify-between pt-2 w-4/5 gap-3">
            <div>
              <h2 className="font-medium">Ajustes de Contenido</h2>
              <p className=" text-gray-800">
                Configure el titulo de la oferta del encabezado con el titulo de
                la oferta , el titulo de redirección y enlace de redirección,
              </p>
            </div>
            <Card className="flex flex-col w-2/4 gap-4 p-7">
              <div className="flex flex-col gap-2 ">
                <Label>Titulo de la oferta</Label>
                <Input type="text" placeholder="" />
              </div>
              <div className="flex flex-col gap-2 ">
                <Label>Titulo de redirección</Label>
                <Input type="text" placeholder="" />
              </div>
              <div className="flex flex-col gap-2 ">
                <Label>Url de redirección</Label>
                <Input type="text" placeholder="" />
              </div>
              <div className="flex flex-row justify-end">
                <Button>Establecer</Button>
              </div>
            </Card>
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
