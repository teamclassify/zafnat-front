//import useProduct from "../../../hooks/useProduct";

import ReviewInfo from "./ReviewInfo";

export default function Review() {
  //const { products } = useProduct();
  return (
    <div>
      <div className="flex justify-between font-semibold">
        <p>Producto</p>
        <p>Total de reseñas</p>
      </div>
      <ReviewInfo />
      <ReviewInfo />
      <ReviewInfo />
      <ReviewInfo />
    </div>
  );
}
