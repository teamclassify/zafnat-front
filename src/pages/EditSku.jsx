import { useState } from "react";
import { TbCameraPlus } from "react-icons/tb";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";
import SelectColor from "../components/custom/SelectColor";
import SelectSize from "../components/custom/SelectSize";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import ProductsService from "../services/api/ProductsService";

function EditSku({ productId, sku }) {
  const queryClient = useQueryClient();

  const [name, setName] = useState(sku.sku);
  const [price, setPrice] = useState(sku.price);
  const [color, setColor] = useState(sku.color_attribute_id);
  const [size, setSize] = useState(sku.size_attribute_id);

  const { mutate: mutateUpdate, isLoading: isLoadingUpdate } = useMutation(
    (data) => {
      return ProductsService.updateProductSku({
        id: productId,
        sku: sku.id,
        name: data.name,
        price: data.price,
        color_attribute_id: data.color,
        size_attribute_id: data.size,
      });
    },

    {
      onSuccess: () => {
        queryClient.invalidateQueries(["product", productId]);
        toast.success("Producto actualizado correctamente");
      },
    }
  );

  const handleSubmit = () => {
    console.log(name, price, color, size);

    if (!name || !price || !color || !size) {
      return;
    }

    mutateUpdate({
      name,
      price,
      color,
      size,
    });
  };

  const handleChangeColor = (val) => {
    setColor(val);
  };

  const handleChangeSize = (val) => {
    setSize(val);
  };

  return (
    <>
      <div key={sku.id} className="flex flex-col gap-2">
        <Label htmlFor="sku">SKU</Label>
        <Input
          id="sku"
          name="sku"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Label htmlFor="stock">Stock</Label>
        <Input id="stock" name="stock" disabled value={sku.quantity} />

        <div className="w-full flex gap-4 items-center">
          <div className="w-full">
            <Label htmlFor="price">Precio</Label>
            <Input
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="w-full">
            <Label htmlFor="color">Color</Label>
            <SelectColor
              defaultValue={color}
              handleSelect={handleChangeColor}
            />
          </div>

          <div className="w-full">
            <Label htmlFor="color">Tamaño</Label>
            <SelectSize defaultValue={size} handleSelect={handleChangeSize} />
          </div>
        </div>

        <Card className="flex items-center justify-center border-dashed border-2 border-gray-300 cursor-pointer hover:border-gray-500 transition-colors w-full">
          <CardContent className="text-center flex flex-col items-center">
            <TbCameraPlus className="text-gray-500 mt-6" size={24} />
            <p className="text-gray-600 font-semibold">Add Image</p>
            <p className="text-gray-400 text-xs">png, jpeg, jpg</p>
          </CardContent>
        </Card>

        <Button onClick={handleSubmit} variant="outline">
          {isLoadingUpdate ? "Actualizando..." : "Actualizar"}
        </Button>
      </div>
      <hr className="my-10" />
    </>
  );
}

export default EditSku;
