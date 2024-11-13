import { Truck } from "lucide-react";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Button } from "../components/ui/button";

export default function PaymentDone() {
  return (
    <DefaultTemplate>
      <div className="flex flex-col justify-between items-center">
        <Truck className="h-1/6 w-1/6" />
        <div className="flex flex-col items-center gap-2">
          <Title title="¡Gracias por comprar con nosotros!" />
          <p className="font-medium text-xl">El id de tu pedido es #4312 </p>
          <p className="font-normal text-xl p-3">
            Te enviaremos un email con los detalles de la orden y el rastreo del
            envío
          </p>
          <Button>Continuar comprando</Button>
        </div>
      </div>
    </DefaultTemplate>
  );
}
