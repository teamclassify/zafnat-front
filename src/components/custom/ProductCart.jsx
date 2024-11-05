import { Button } from "../ui/button";
import Quantity from "./Quantity";
import { Trash } from "lucide-react";
import { CheckBoxProductPay } from "./CheckBoxProductPay";
import { DialogDisableProduct } from "./DialogDisableProduct";
import { useState } from "react";

export default function ProductCart({
  id,
  name,
  size,
  quantity,
  img,
  price,
  handleProductSelect,
  isChecked,
  handleDisableProduct
}) {
  const product = {
    id: id,
    name: name,
    size: size,
    quantity: quantity,
    price: price,
    img: img,
  };

  const [openDialog, setOpenDialog] = useState(false);


  const handleDeleteProduct = () => {
    setOpenDialog(true); 
  };

  return (
    <main>
      <div className="flex flex-row justify-between ">
        <div className="flex">
          <CheckBoxProductPay
            product={product}
            handleProductSelect={handleProductSelect}
            isChecked={isChecked}
          />
          <img src={img} className="w-5/12" />
          <div className="flex flex-col pt-5 gap-2">
            <p>{name}</p>
            <p>Talla: {size}</p>
            <Quantity num={quantity} />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Button variant="ghost" className="p-1" onClick={handleDeleteProduct}>
            <Trash />
          </Button>
          <p>${price}.000</p>
        </div>
      </div>
      <DialogDisableProduct
        product={product}
        setOpen={setOpenDialog}
        open={openDialog}
        handleDisableProduct={handleDisableProduct} 
      />
    </main>
  );
}
