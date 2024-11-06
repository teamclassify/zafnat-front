import useProduct from "../../hooks/useProduct";
import ProductCart from "./ProductCart";

export default function ProductCartGrid() {
  const { products, handleDisableProduct, handleProductSelect, productSelect } =
    useProduct();

  return (
    <div className="flex flex-col gap-4 w-2/4">
      {products.products.map((product) => (
        <ProductCart
          key={product.id}
          infoProduct={product}
          handleProductSelect={handleProductSelect}
          isChecked={productSelect.some(
            (select) =>
              select.name === product.name &&
              select.size === product.attributes[0].value
          )}
          handleDisableProduct={handleDisableProduct}
        />
      ))}
    </div>
  );
}
