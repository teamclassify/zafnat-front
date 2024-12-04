import { useQuery } from "react-query";
import { Link } from "wouter";
import Purchase from "../components/custom/Purchase";
import ShippingInfo from "../components/custom/ShippingInfo";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Button } from "../components/ui/button";
import useCart from "../hooks/useCart";
import CartService from "../services/api/CartService";

export default function Shipping() {
  const { data, isLoading, isFetching } = useQuery(
    "products-cart",
    CartService.getAll
  );

  const { address } = useCart();

  return (
    <DefaultTemplate>
      <Title title="Metodo de envío" />

      {address ? (
        <>
          <p>
            La dirección de envío es en{" "}
            <span className="font-bold">
              {address.country}, {address.city}
            </span>
          </p>
          <p className="text-sm">
            <span className="font-bold">Direccion:</span>{" "}
            {address.address_line_1}
          </p>
          <p className="text-sm">
            <span className="font-bold">Codigo postal: </span>
            {address.postal_code}
          </p>
          <div className="flex flex-row justify-between gap-3">
            <div className="flex flex-col pt-4 h-1/2 w-2/4 gap-4 ">
              <ShippingInfo
                title={"Envíos Nacionales"}
                description={"Depende de la zona"}
                icon={"Truck"}
              />

              <div className="flex flex-row justify-end pt-2">
                <Link to="/pago">
                  <Button>Siguiente</Button>
                </Link>
              </div>
            </div>
            <Purchase
              buy={true}
              data={data}
              isLoading={isLoading || isFetching}
            />
          </div>
        </>
      ) : (
        <>
          <p>Debes tener seleccionada una direccion de envio</p>
          <div className="flex flex-row justify-end pt-2">
            <Link to="/entrega">
              <Button>Entrega</Button>
            </Link>
          </div>
        </>
      )}
    </DefaultTemplate>
  );
}
