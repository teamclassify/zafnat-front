import { CheckboxDemo } from "./CheckBoxDemo";
import { Button } from "../ui/button";
import Quantity from "./Quantity";
import { Trash } from "lucide-react";

export default function ProductCart() {
  return (
    <main>
      <div className="flex flex-row justify-between ">
        <div className="flex">
          <CheckboxDemo />
          <img src="/assets/product.png" className="w-5/12" />
          <div className="flex flex-col pt-5 gap-2">
            <p>Jean ochentero</p>
            <p>Talla: 8</p>
            <Quantity />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Button variant="ghost" className="p-1">
            <Trash />
          </Button>
          <p>$80.000</p>
        </div>
      </div>
    </main>
  );
}
