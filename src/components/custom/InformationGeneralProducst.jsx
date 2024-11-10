import useCalculateProductPrice from "../../hooks/useCalculateProductPrice";
import useProduct from "../../hooks/useProduct";

export default function InformationGeneralProducts() {
  const { totalPrice } = useCalculateProductPrice();
  const { productSelect } = useProduct();
  return (
    <div className="flex justify-between font-semibold">
      {productSelect && productSelect.length > 0 ? (
        <p>Total general ({`${productSelect.length}`} articulo)</p>
      ) : (
        <p>Total general (0 articulos)</p>
      )}
      <p>{totalPrice ? "$" + totalPrice + ".000" : "$0.00"}</p>
    </div>
  );
}
