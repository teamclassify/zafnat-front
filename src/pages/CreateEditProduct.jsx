import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Switch } from "../components/ui/switch";
import { TbCameraPlus } from "react-icons/tb";
import { FaFolder, FaFile } from "react-icons/fa";
import { Button } from "../components/ui/button";

const renderCheckboxItem = (icon, label, defaultChecked = false) => (
  <div className="flex items-center gap-2">
    {icon}
    <Checkbox defaultChecked={defaultChecked} /> {label}
  </div>
);

function CreateEditProduct() {
  return (
    <DefaultTemplate>
      <div className="flex flex-row mb-4 align-middle justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Nuevo Producto</h1>
        <Button>Guardar Producto</Button>
      </div>
      <div className="flex flex-row w-full gap-5">
        <div className="flex flex-col w-full gap-4">
          <Card className="max-w-2xl p-2">
            <CardHeader className="py-4">
              <CardTitle className="text-1xl font-bold">General</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Label htmlFor="sku">SKU *</Label>
              <Input id="sku" />
              <Label htmlFor="name">Nombre *</Label>
              <Input id="name" />
              <Label htmlFor="color">Color</Label>
              <Input id="color" />
            </CardContent>
          </Card>

          <Card className="max-w-2xl p-2">
            <CardHeader className="py-4">
              <CardTitle className="text-1xl font-bold">Descripción</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Textarea className="resize-none" placeholder="Type your message here." id="description" />
            </CardContent>
          </Card>

          <Card className="max-w-2xl p-2">
            <CardHeader className="py-4">
              <CardTitle className="text-1xl font-bold">Imágenes</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Card className="flex items-center justify-center border-dashed border-2 border-gray-300 cursor-pointer hover:border-gray-500 transition-colors w-full">
                <CardContent className="text-center flex flex-col items-center">
                  <TbCameraPlus className="text-gray-500 mt-6" size={24} />
                  <p className="text-gray-600 font-semibold">Add Image</p>
                  <p className="text-gray-400 text-xs">png, jpeg, jpg</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
          <div>
          </div>
        </div>

        <div className="flex flex-col w-1/2 gap-4">
          <Card className="max-w-2xl p-2">
            <CardHeader className="py-4">
              <CardTitle className="text-1xl font-bold">Precio</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Label htmlFor="price">Precio *</Label>
              <Input id="price" placeholder="$" />
              <Label htmlFor="special_price">Precio especial *</Label>
              <Input id="special_price" />
            </CardContent>
          </Card>

          <Card className="p-2">
            <CardHeader className="py-4">
              <CardTitle className="text-1xl font-bold">Envío</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Label htmlFor="length">Longitud</Label>
              <Input id="length" />
              <Label htmlFor="width">Ancho</Label>
              <Input id="width" />
              <Label htmlFor="height">Alto</Label>
              <Input id="height" />
            </CardContent>
          </Card>

          <Card className="p-2">
            <CardHeader className="py-4">
              <CardTitle className="text-1xl font-bold">Inventario</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <Switch id="manage_stock" />
                <Label htmlFor="manage_stock">Manejar Stock</Label>
              </div>
              <Label htmlFor="default">Por defecto</Label>
              <Input id="default" placeholder="0" />
            </CardContent>
          </Card>

          <Card className="p-2">
            <CardHeader className="pt-4 pb-2">
              <CardTitle className="text-1xl font-bold">Categorías</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="men">
                  <AccordionTrigger className="flex items-center gap-2">
                    {renderCheckboxItem(<FaFolder className="text-gray-500" />, "Men")}
                  </AccordionTrigger>
                  <AccordionContent className="pl-6">
                    {renderCheckboxItem(<FaFile className="text-gray-500" />, "Formal Wear")}
                    {renderCheckboxItem(<FaFile className="text-gray-500" />, "Casual Wear", true)}
                    {renderCheckboxItem(<FaFile className="text-gray-500" />, "Active Wear")}
                    {renderCheckboxItem(<FaFile className="text-gray-500" />, "Foot Wear")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="woman">
                  <AccordionTrigger className="flex items-center gap-2">
                    {renderCheckboxItem(<FaFolder className="text-gray-500" />, "Woman")}
                  </AccordionTrigger>
                  <AccordionContent className="pl-6">
                    {renderCheckboxItem(<FaFile className="text-gray-500" />, "Formal Wear", true)}
                    {renderCheckboxItem(<FaFile className="text-gray-500" />, "Casual Wear")}
                    {renderCheckboxItem(<FaFile className="text-gray-500" />, "Active Wear")}
                    {renderCheckboxItem(<FaFile className="text-gray-500" />, "Foot Wear")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default CreateEditProduct;
