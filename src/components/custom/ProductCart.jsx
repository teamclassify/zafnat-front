import { Button } from "../ui/button";
import Quantity from "./Quantity";
import { Trash } from "lucide-react";
import { CheckBoxProductPay } from "./CheckBoxProductPay";
import { DialogDisableProduct } from "./DialogDisableProduct";
import { useState } from "react";

export default function ProductCart({ infoProduct, isChecked }) {
  const product = {
    id: infoProduct.id,
    name: infoProduct.name,
    size: infoProduct.attributes[0].value,
    quantity: 1,
    price: infoProduct.skus[0].price,
    img: "/assets/product.png",
  };

  const [openDialog, setOpenDialog] = useState(false);

  const handleDeleteProduct = () => {
    setOpenDialog(true);
  };

  return (
    <main>
      <div className="flex flex-row justify-between ">
        <div className="flex">
          <CheckBoxProductPay product={product} isChecked={isChecked} />
          <img src={product.img} className="w-5/12" />
          <div className="flex flex-col pt-5 gap-2">
            <p>{product.name}</p>
            <p>Talla: {product.size}</p>
            <Quantity num={product.quantity} />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Button variant="ghost" className="p-1" onClick={handleDeleteProduct}>
            <Trash />
          </Button>
          <p>${product.price}.000</p>
        </div>
      </div>
      <DialogDisableProduct
        product={product}
        setOpen={setOpenDialog}
        open={openDialog}
      />
    </main>
  );
}
