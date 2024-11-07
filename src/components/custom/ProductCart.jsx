import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { DialogDisableProduct } from "./DialogDisableProduct";
import { useState } from "react";
import ProductCartInfo from "./ProductCartInfo";

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
        <ProductCartInfo product={product} isChecked={isChecked}/>
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
