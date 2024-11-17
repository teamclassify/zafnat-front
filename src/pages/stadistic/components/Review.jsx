import useProduct from "../../../hooks/useProduct";

import ReviewInfo from "./ReviewInfo";

export default function Review() {
  const { products } = useProduct();
  return (
    <div>
      <div className="flex justify-between font-semibold">
        <p>Producto</p>
        <p>Total de reseñas</p>
      </div>
      <div className="flex flex-col gap-2">
        {products.products.map((product) => (
          <ReviewInfo
            key={product.id}
            name={product.name}
            reviews={product.reviews}
          />
        ))}
      </div>
    </div>
  );
}
