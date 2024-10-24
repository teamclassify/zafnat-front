import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SelectOption } from "./SelectOptions";
import { Frown } from "lucide-react";

export function CardInfoClient({ name, email, address, products }) {
  return (
    <Card className="">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{name}</CardTitle>
        </div>
        <CardDescription>Email: {email}</CardDescription>
        <CardDescription>Dirección: {address}</CardDescription>
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
