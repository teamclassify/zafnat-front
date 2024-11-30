import { useQuery } from "react-query";
import CartService from "../../services/api/CartService";
import ProductPurchase from "./ProductPurchase";

export default function PurchaseProduct({ open }) {
  const { data, isLoading, isFetching } = useQuery(
    "products-cart",
    CartService.getAll
  );

  if (isLoading || isFetching) {
    return <p>Cargando...</p>;
  }

  if (!open || !data?.data?.length) {
    return null;
  }

  return (
    open &&
    data?.data?.map((product) => (
      <ProductPurchase
        key={product?.id}
        name={product?.name}
        price={product?.price + ".000"}
        quantity={1}
        image={"/assets/product.png"}
      />
    ))
  );
}
