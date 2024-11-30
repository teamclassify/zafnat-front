import { useQuery } from "react-query";
import { Link } from "wouter";
import AddressService from "../../services/api/AddressService";
import { Button } from "../ui/button";
import CartDirection from "./CardDirection";
import { Title } from "./Title";

export default function DeliveryDetails() {
  const { data, isLoading, isRefetching } = useQuery("addresses", () =>
    AddressService.getAll()
  );

  return (
    <main className="flex flex-col gap-4 w-2/4">
      <Title title="Elige la forma de entrega" />
      <p>Entrega a domicilio</p>
      <div className="flex flex-col gap-4">
        {/* <CartDirection isChecked={true} /> */}

        {isLoading || isRefetching ? (
          <p>Cargando...</p>
        ) : (
          <>
            {data && data?.length > 0 ? (
              data.map((address) => (
                <CartDirection key={address.id} address={address} />
              ))
            ) : (
              <p>No hay direcciones guardadas</p>
            )}
          </>
        )}
      </div>
      <div className="flex justify-end gap-3">
        <Link to="/direccion">
          <Button variant="secondary">Agregar nueva dirección</Button>
        </Link>
        <Link to="/envio">
          <Button>Siguiente</Button>
        </Link>
      </div>
    </main>
  );
}
