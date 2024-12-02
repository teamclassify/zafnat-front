import { Truck } from "lucide-react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "wouter";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Button } from "../components/ui/button";
import useCart from "../hooks/useCart";
import OrdersService from "../services/api/OrdersServices";

export default function PaymentDone() {
  const { invoiceId, setInvoiceId } = useCart();

  const params = new URLSearchParams(window.location.search);

  const { data, isLoading } = useQuery(["order", invoiceId], () => {
    return invoiceId ? OrdersService.findById(invoiceId) : null;
  });

  useEffect(() => {
    const external_reference = params.get("external_reference");
    if (external_reference) setInvoiceId(external_reference);
  }, [params]);

  console.log({ data, isLoading });

  return (
    <DefaultTemplate>
      <div className="flex flex-col justify-between items-center">
        <Truck className="h-1/6 w-1/6" />
        <div className="flex flex-col items-center gap-2">
          {isLoading ? (
            <Title>Cargando...</Title>
          ) : (
            <>
              {data && (
                <>
                  <Title>Pago realizado con éxito</Title>
                  <p className="text-center">
                    Gracias por tu compra, tu pedido ha sido realizado con
                    éxito.
                  </p>
                  <p className="text-center">
                    Tu número de pedido es: <strong>{data?.id}</strong>
                  </p>
                  <p className="text-center">
                    Puedes ver el estado de tu pedido en la sección de{" "}
                    <Link href="/perfil/pedidos">
                      <a className="text-primary">historial</a>
                    </Link>
                  </p>
                  <Button
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  >
                    Volver a la tienda
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </DefaultTemplate>
  );
}
