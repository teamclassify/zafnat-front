import { Title } from "./Title";
import { Button } from "../ui/button";

export default function Purchase() {
  return (
    <main className="w-2/5">
      <div className="flex flex-col gap-1">
        <div className="pb-4">
          <Title title="Resumen de la compra" />
        </div>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$80.000</p>
        </div>
        <div className="flex justify-between">
          <p>Cupon de descuento</p>
          <p>Aplicar cupón</p>
        </div>
        <div className="flex justify-between">
          <p>Envío</p>
          <p>$0.00</p>
        </div>
        <div className="flex justify-between">
          <p>Total general (1 articulo)</p>
          <p>$80.000</p>
        </div>
      </div>
      <div className="flex justify-end pt-5">
        <Button>Proceder al pago</Button>
      </div>
    </main>
  );
}
