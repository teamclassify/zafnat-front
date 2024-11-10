import { Link } from "wouter";
import Purchase from "../components/custom/Purchase";
import ShippingInfo from "../components/custom/ShippingInfo";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Button } from "../components/ui/button";

export default function Shipping() {
  return (
    <DefaultTemplate>
      <Title title="Metodo de envío" />
      <p>La dirección de envío es en Colombia, Bogotá</p>
      <div className="flex flex-row justify-between gap-3">
        <div className="flex flex-col pt-4 h-1/2 w-2/4 gap-4 ">
          <ShippingInfo
            title={"Recogida en tienda"}
            description={"Gratis"}
            icon={"Store"}
          />
          <ShippingInfo
            title={"Envíos Nacionales"}
            description={"Depende de la zona"}
            icon={"Truck"}
          />
          <ShippingInfo
            title={"Envíos Internacionales"}
            description={"Depende de la zona"}
            icon={"Airplane"}
          />
          <div className="flex flex-row justify-end pt-2">
            <Link to="/pago">
              <Button>Siguiente</Button>
            </Link>
          </div>
        </div>
        <Purchase buy={true} />
      </div>
    </DefaultTemplate>
  );
}
