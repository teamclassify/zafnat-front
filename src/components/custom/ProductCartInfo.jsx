import { CheckBoxProductPay } from "./CheckBoxProductPay";
import Quantity from "./Quantity";

export default function ProductCartInfo({ product, isChecked }) {
  return (
    <div className="flex">
      <CheckBoxProductPay product={product} isChecked={isChecked} />
      <img src={product.img} className="w-5/12" />
      <div className="flex flex-col pt-5 gap-2">
        <p>{product.name}</p>
        <p>Talla: {product.size}</p>
        <Quantity num={product.quantity} />
      </div>
    </div>
  );
}
