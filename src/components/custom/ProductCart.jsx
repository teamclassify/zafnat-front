import { Button } from "../ui/button";
import Quantity from "./Quantity";
import { Trash } from "lucide-react";
import { CheckBoxProductPay } from "./CheckBoxProductPay";

export default function ProductCart({
  name,
  size,
  quantity,
  img,
  price,
  handleProductSelect,
}) {
  const product = {
    name: name,
    size: size,
    quantity: quantity,
    price: price,
    img: img,
  };

  
  return (
    <main>
      <div className="flex flex-row justify-between ">
        <div className="flex">
          <CheckBoxProductPay
            product={product}
            handleProductSelect={handleProductSelect}
          />
          <img src={img} className="w-5/12" />
          <div className="flex flex-col pt-5 gap-2">
            <p>{name}</p>
            <p>Talla: {size}</p>
            <Quantity num={quantity} />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Button variant="ghost" className="p-1">
            <Trash />
          </Button>
          <p>${price}.000</p>
        </div>
      </div>
    </main>
  );
}
