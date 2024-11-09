import useProduct from "../../hooks/useProduct";
import ProductPurchase from "./ProductPurchase";

export default function PurchaseProduct({ open }) {
  const { productSelect } = useProduct();

  if (!open || !productSelect?.length) {
    return null;
  }

  return (
    open &&
    productSelect.map((product) => (
      <ProductPurchase
        key={product.id}
        name={product.name}
        price={product.price + ".000"}
        quantity={1}
        image={"/assets/product.png"}
      />
    ))
  );
}
