import { CheckboxDemo } from "./CheckBoxDemo";
import { Button } from "../ui/button";
import Quantity from "./Quantity";
import { Trash } from "lucide-react";

export default function ProductCart({name, size, quantity, img, price}) {
  return (
    <main>
      <div className="flex flex-row justify-between ">
        <div className="flex">
          <CheckboxDemo />
          <img src={img} className="w-5/12" />
          <div className="flex flex-col pt-5 gap-2">
            <p>{name}</p>
            <p>Talla: {size}</p>
            <Quantity num={quantity}/>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Button variant="ghost" className="p-1">
            <Trash />
          </Button>
          <p>${price}</p>
        </div>
      </div>
    </main>
  );
}
