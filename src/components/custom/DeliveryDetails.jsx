import { Link } from "wouter";
import { Button } from "../ui/button";
import CartDirection from "./CardDirection";
import { Title } from "./Title";

export default function DeliveryDetails() {
  return (
    <main className="flex flex-col gap-4 w-2/4">
      <Title title="Elige la forma de entrega" />
      <p>Entrega a domicilio</p>
      <div className="flex flex-col gap-4">
        <CartDirection isChecked={true} />
        <CartDirection />
        <CartDirection />
      </div>
      <div className="flex justify-end gap-3">
        <Link to="/direccion">
          <Button variant="secondary">Agregar nueva dirección</Button>
        </Link>
        <Button>Siguiente</Button>
      </div>
    </main>
  );
}
