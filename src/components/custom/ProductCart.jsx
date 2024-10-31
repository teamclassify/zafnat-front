import { CheckboxDemo } from "./CheckBoxDemo";
import { Button } from "../ui/button";
import Quantity from "./Quantity";
import { Trash } from "lucide-react";

export default function ProductCart() {
  return (
    <main className="w-2/4">
      <div className="flex flex-row justify-between">
        <div className="flex">
          <CheckboxDemo />
          <img src="/assets/product.png" className="w-3/12" />
          <div className="flex flex-col pt-5 gap-2">
            <p>Jean ochentero</p>
            <p>Talla: M</p>
            <Quantity />
          </div>
        </div>
        <div className="flez flex-col ">
          <Button variant="ghost">
            <Trash />
          </Button>
          <p>Precio: $80.000</p>
        </div>
      </div>
    </main>
  );
}
