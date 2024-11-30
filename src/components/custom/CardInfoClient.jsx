import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Frown } from "lucide-react";
import { useEffect, useState } from "react";
import { SelectOption } from "./SelectOptions";

export function CardInfoClient({ name, email, address, products, gender }) {
  const [addressMain, setAddressMain] = useState(address[0] || null);

  useEffect(() => {
    setAddressMain(address[0]);
  }, [address]);

  return (
    <Card className="">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{name}</CardTitle>
        </div>
        <CardDescription>Email: {email}</CardDescription>
        <CardDescription>Genero: {gender}</CardDescription>
        <CardDescription>
          Dirección:{" "}
          {addressMain ? (
            <>
              {addressMain.address_line_1} - {addressMain.country},{" "}
              {addressMain.city}
            </>
          ) : (
            "No hay dirección"
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {products.length > 0 ? (
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="products">Productos recientes</Label>
                <SelectOption rol={products} title={products[0]} />
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-2">
                <CardTitle>Este usuario no ha adquirido productos</CardTitle>
                <Frown />
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
