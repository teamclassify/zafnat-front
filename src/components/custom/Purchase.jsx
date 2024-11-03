import { Title } from "./Title";
import { Button } from "../ui/button";
import ProductPurchase from "./ProductPurchase";

export default function Purchase({ buy, name, price, quantity, image }) {
  return (
    <main className="w-2/5">
      <div className="flex flex-col gap-1">
        <div>
          <Title title="Resumen de la compra" />
        </div>
        {buy && <ProductPurchase name={name} price={price} quantity={quantity} image={image} />}
        <div className="flex justify-between pt-4">
          <p>Subtotal</p>
          <p>{price ? "$" + price + ".000": "$0.00"}</p>
        </div>
        <div className="flex justify-between">
          <p>Cupon de descuento</p>
          <p>Aplicar cupón</p>
        </div>
        <div className="flex justify-between">
          <p>Envío</p>
          <p>$0.00</p>
        </div>
        <div className="flex justify-between font-semibold">
          <p>Total general (1 articulo)</p>
          <p>{price ? "$" + price + ".000": "$0.00"}</p>
        </div>
      </div>
      <div className="flex justify-end pt-5">
        <Button>Proceder al pago</Button>
      </div>
    </main>
  );
}
