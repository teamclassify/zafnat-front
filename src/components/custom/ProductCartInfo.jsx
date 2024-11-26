import Quantity from "./Quantity";

export default function ProductCartInfo({ product }) {
  return (
    <div className="flex">
      <img src={product.product_sku.photos[0]?.value} className="w-5/12" />
      <div className="flex flex-col pt-5 gap-2">
        <p>{product.product_sku.product.name}</p>
        <p>Talla: {product.product_sku.size_attribute.value}</p>
        <Quantity id={product.id} num={product.quantity} />
      </div>
    </div>
  );
}
