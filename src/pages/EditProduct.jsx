import { Switch } from "@/components/ui/switch";
import { useParams } from "wouter";
import AdminTemplate from "../components/templates/AdminTemplate";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { FaFile, FaFolder } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "sonner";
import { LoadingGrid } from "../components/custom/loading";
import SelectColor from "../components/custom/SelectColor";
import SelectSize from "../components/custom/SelectSize";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import CategoriesService from "../services/api/CategoriesService";
import ProductsService from "../services/api/ProductsService";
import EditSku from "./EditSku";
import ErrorPage from "./ErrorPage";

const renderCheckboxItem = (
  icon,
  label,
  defaultChecked = false,
  handleSelect,
  id
) => (
  <div className="flex items-center gap-2">
    {icon}
    <Checkbox
      defaultChecked={defaultChecked}
      onCheckedChange={() => handleSelect(id)}
    />
    {label}
  </div>
);

function EditProduct() {
  const queryClient = useQueryClient();
  const params = useParams();
  const { id } = params;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState(false);
  const [categorias, setCategorias] = useState([]);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [sku, setSku] = useState("");

  const { data, isLoading } = useQuery(["product", id], () =>
    ProductsService.getById(id)
  );

  const { data: dataCategories, isLoading: isLoadingCategories } = useQuery(
    "categories",
    () => CategoriesService.getAll()
  );

  const { mutate: mutateUpdate, isLoading: isLoadingUpdate } = useMutation(
    (data) => {
      return ProductsService.update({
        id: id,
        name: data.name,
        description: data.description,
        categories: data.categorias,
        status: data.state,
      });
    },

    {
      onSuccess: () => {
        queryClient.invalidateQueries(["product", id]);
        toast.success("Producto actualizado correctamente");
      },
    }
  );

  const { mutate: mutateNewSku, isLoading: isLoadingNewSku } = useMutation(
    (data) => {
      return ProductsService.createProductSku({
        productId: id,
        name: data.sku,
        price: data.price,
        color: data.color,
        size: data.size,
      });
    },

    {
      onSuccess: () => {
        queryClient.invalidateQueries(["product", id]);
        toast.success("Producto actualizado correctamente");
      },
    }
  );

  if (!isLoading && (!data?.data || data?.data?.length <= 0)) {
    return <ErrorPage />;
  }

  const handleSubmit = () => {
    console.log({
      name,
      description,
      state,
      categorias,
    });

    mutateUpdate({
      name,
      description,
      state,
      categorias,
    });
  };

  const handleSelect = (option) => {
    setCategorias((prev) => {
      if (prev.includes(option)) {
        return prev.filter((category) => category !== option);
      }
      return [...prev, option];
    });
  };

  const handleChangeColor = (val) => {
    setColor(val);
  };

  const handleChangeSize = (val) => {
    setSize(val);
  };

  const handleNewVariacion = () => {
    console.log(sku, price, color, size);

    mutateNewSku({
      sku,
      price,
      color,
      size,
    });
  };

  useEffect(() => {
    const product = data?.data[0]?.product;

    if (product) {
      setName(product.name);
      setDescription(product.description);
      setState(product.status);

      const categories = product.categories.map(
        (category) => category.category_id
      );
      setCategorias(categories);
    }
  }, [data?.data]);

  return (
    <AdminTemplate>
      <div>
        <div className="flex flex-row mb-4 align-middle justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Editar Producto {id}
          </h1>
          <Button onClick={handleSubmit}>
            {isLoadingUpdate ? "Guardando..." : "Guardar"}
          </Button>
        </div>

        {isLoading ? (
          <LoadingGrid />
        ) : (
          <div className="grid grid-cols-[1fr,0.5fr] w-full gap-5">
            <div className="grid w-full gap-4">
              <Card className="p-0">
                <CardHeader className="py-4">
                  <CardTitle className="text-1xl font-bold">General</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  {/* <Label htmlFor="sku">SKU *</Label>
                  <Input id="sku" name="sku" /> */}
                  <Label htmlFor="name">Nombre *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {/* <Label htmlFor="color">Color</Label>
                  <Input id="color" /> */}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </CardContent>
              </Card>

              {/* <Card className="p-0">
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
              </Card> */}

              <Card className="p-0">
                <CardHeader className="py-4 flex flex-row justify-between items-center">
                  <CardTitle className="text-1xl font-bold">
                    Variaciones
                  </CardTitle>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Nueva variacion</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>
                          Nueva variación para el producto
                        </DialogTitle>
                        <DialogDescription></DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            SKU
                          </Label>
                          <Input
                            className="col-span-3"
                            value={sku}
                            onChange={(e) => setSku(e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Precio
                          </Label>
                          <Input
                            className="col-span-3"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Color
                          </Label>
                          <SelectColor
                            defaultValue={""}
                            handleSelect={handleChangeColor}
                          />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Tamaño
                          </Label>
                          <SelectSize
                            defaultValue={""}
                            handleSelect={handleChangeSize}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleNewVariacion}>
                          {isLoadingNewSku ? "Guardando..." : "Guardar"}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent className="">
                  {data?.data?.map((variation) => {
                    return (
                      <>
                        <EditSku
                          key={variation.id}
                          productId={id}
                          sku={variation}
                        />
                      </>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 h-[100px]">
              <Card className="p-0">
                <CardHeader className="py-4">
                  <CardTitle className="text-1xl font-bold">Opciones</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <Label htmlFor="price">Estado</Label>
                  <Switch
                    name="state"
                    checked={state}
                    onCheckedChange={(val) => setState(val)}
                  />
                </CardContent>
              </Card>

              {/* <Card className="p-0">
                <CardHeader className="py-4">
                  <CardTitle className="text-1xl font-bold">Precio</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <Label htmlFor="price">Precio *</Label>
                  <Input id="price" placeholder="$" name="price" />
                  <Label htmlFor="special_price">Precio especial *</Label>
                  <Input id="special_price" name="specialPrice" />
                </CardContent>
              </Card> */}
              {/* 
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
              </Card> */}

              <div className="p-0">
                <div className="pt-4 pb-2">
                  <CardTitle className="text-1xl font-bold">
                    Categorías
                  </CardTitle>
                </div>

                <div>
                  {isLoadingCategories ? (
                    <p>Caargando...</p>
                  ) : (
                    <Accordion type="single" collapsible>
                      {dataCategories?.data?.map((category) => (
                        <AccordionItem key={category.id} value={category.name}>
                          <AccordionTrigger className="p-1 flex items-center gap-2">
                            {renderCheckboxItem(
                              <FaFolder className="text-gray-500" />,
                              category.name,
                              categorias.includes(category.id),
                              handleSelect,
                              category.id
                            )}
                          </AccordionTrigger>
                          <AccordionContent className="pl-6">
                            {category.categories.map((subcategory) => (
                              <div key={subcategory.id}>
                                {renderCheckboxItem(
                                  <FaFile className="text-gray-500" />,
                                  subcategory.name,
                                  categorias.includes(subcategory.id),
                                  handleSelect,
                                  subcategory.id
                                )}
                              </div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminTemplate>
  );
}

export default EditProduct;
