import { Switch } from "@/components/ui/switch";
import { TbCameraPlus } from "react-icons/tb";
import { useParams } from "wouter";
import AdminTemplate from "../components/templates/AdminTemplate";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import Categories from "../components/catalog/Categories";

function EditProduct() {
  const params = useParams();
  const { id } = params;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <AdminTemplate>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row mb-4 align-middle justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Editar Producto {id}
          </h1>
          <Button type="submit">Guardar Producto</Button>
        </div>
        <div className="grid grid-cols-[1fr,0.5fr] w-full gap-5">
          <div className="grid w-full gap-4">
            <Card className="p-0">
              <CardHeader className="py-4">
                <CardTitle className="text-1xl font-bold">General</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Label htmlFor="sku">SKU *</Label>
                <Input id="sku" name="sku" />
                <Label htmlFor="name">Nombre *</Label>
                <Input id="name" name="name" />
                <Label htmlFor="color">Color</Label>
                {/* TODO: SELECT */}
                <Input id="color" />
              </CardContent>
            </Card>

            <Card className="p-0">
              <CardHeader className="py-4">
                <CardTitle className="text-1xl font-bold">
                  Descripción
                </CardTitle>
              </CardHeader>
              <CardContent className="">
                <Textarea
                  className="resize-none"
                  placeholder="Type your message here."
                  id="description"
                  rows={5}
                  name="description"
                />
              </CardContent>
            </Card>

            <Card className="p-0">
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
            <div></div>
          </div>

          <div className="grid gap-4">
            <Card className="p-0">
              <CardHeader className="py-4">
                <CardTitle className="text-1xl font-bold">Opciones</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Label htmlFor="price">Estado</Label>
                <Switch name="state" />
              </CardContent>
            </Card>

            <Card className="p-0">
              <CardHeader className="py-4">
                <CardTitle className="text-1xl font-bold">Precio</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Label htmlFor="price">Precio *</Label>
                <Input id="price" placeholder="$" name="price" />
                <Label htmlFor="special_price">Precio especial *</Label>
                <Input id="special_price" name="specialPrice" />
              </CardContent>
            </Card>

            <Card className="p-0">
              <CardHeader className="py-4">
                <CardTitle className="text-1xl font-bold">Envío</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Label htmlFor="length">Longitud</Label>
                <Input id="length" name="length" />
                <Label htmlFor="width">Ancho</Label>
                <Input id="width" name="width" />
                <Label htmlFor="height">Alto</Label>
                <Input id="height" name="height" />
              </CardContent>
            </Card>
            {/*
          <Card className="p-0">
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
          </Card> */}

            <Categories />
          </div>
        </div>
      </form>
    </AdminTemplate>
  );
}

export default EditProduct;
