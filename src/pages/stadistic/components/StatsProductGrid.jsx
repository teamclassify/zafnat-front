import useProduct from "../../../hooks/useProduct";
import ScrollProduct from "./ScrollProduct";

export default function StatsProductGrid() {
  const { products } = useProduct();
  const value = [23, 65, 89, 12];
  return (
    <main>
      {products.products.map((product, i) => (
        <ScrollProduct key={product.id} product={product} value={value[i]} />
      ))}
    </main>
  );
}
