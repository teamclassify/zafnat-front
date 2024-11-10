import Purchase from "../components/custom/Purchase";
import ShippingInfo from "../components/custom/ShippingInfo";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";

export default function Shipping() {
  return (
    <DefaultTemplate>
      <Title title="Metodo de envío" />
      <div className="flex flex-row justify-between gap-3">
        <div className="flex flex-col pt-4 h-1/2 w-2/4 gap-4 ">
          <ShippingInfo title={"Recogida en tienda"} description={"Gratis"} icon={"Store"}/>
          <ShippingInfo title={"Envíos Nacionales"} description={"Depende de la zona"} icon={"Truck"} />
          <ShippingInfo title={"Envíos Internacionales"} description={"Depende de la zona"} icon={"Airplane"} />
        </div>
        <Purchase buy={true} />
      </div>
    </DefaultTemplate>
  );
}
