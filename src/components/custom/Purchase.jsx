import { Title } from "./Title";

export default function Purchase() {
  return (
    <main className="w-2/4">
      <div className="pb-4">
        <Title title="Resumen de la compra" />
      </div>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>$80.000</p>
      </div>
      <div className="flex justify-between">
        <p>Cupon de descuento</p>
        <p>Aplicar cuón</p>
      </div>
      <div className="flex justify-between">
        <p>Envío</p>
        <p>$0.00</p>
      </div>
      <div className="flex justify-between">
        <p>Total general (1 articulo)</p>
        <p>$80.000</p>
      </div>
    </main>
  );
}
