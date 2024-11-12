import { Truck } from "lucide-react";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";

export default function PaymentDone() {
  return (
    <DefaultTemplate>
      <main className="flex flex-col justify-between items-center"> 
        <Truck />
        <Title title="Gracias por tu pedido" />
      </main>
    </DefaultTemplate>
  );
}
