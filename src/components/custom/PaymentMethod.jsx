import { initMercadoPago } from "@mercadopago/sdk-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Link } from "wouter";
import useCart from "../../hooks/useCart";
import useUser from "../../hooks/useUser";
import CartService from "../../services/api/CartService";
import OrdersService from "../../services/api/OrdersServices";
import { Button } from "../ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";

initMercadoPago(import.meta.env.VITE_MP_KEY);

export default function PaymentMethod() {
  const { data } = useQuery("products-cart", CartService.getAll);

  const [opened, setOpened] = useState(false);
  const [, setTotalMout] = useState(0);
  const [initPoint, setInitPoint] = useState(null);

  const {
    products,
    setProducts,
    address,
    setPreferenceId,
    preferenceId,
    setInvoiceId,
  } = useCart();
  const { user } = useUser();

  const {
    mutate: createOrder,
    data: dataCreate,
    isLoading: isCreatingOrder,
  } = useMutation(
    (data) => {
      return OrdersService.create(data);
    },

    {
      onSuccess: (data) => {
        console.log({ data });
        setPreferenceId(data?.transaction.id);
        setInitPoint(data?.transaction.sandbox_init_point);
        setInvoiceId(data?.transaction.external_reference);
        setOpened(true);
      },
    }
  );

  console.log({ products, address });
  console.log(dataCreate);

  useEffect(() => {
    console.log(data);

    if (data && data.length > 0 && data[0]?.products) {
      setProducts(data[0]?.products);

      const total = data[0]?.products.reduce((acc, item) => {
        return acc + item.product_sku.price * item.quantity;
      }, 0);

      setTotalMout(total);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (!opened && address && products.length > 0) {
      createOrder({
        user_id: user.id,
        order_items: products,
        address_id: address.id,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, address]);

  useEffect(() => {
    return () => {
      setOpened(false);
    };
  }, []);

  return (
    <Card className="flex flex-col w-full">
      <CardHeader>
        <CardDescription>
          Agrega un nuevo método de pago a tu cuenta
        </CardDescription>
      </CardHeader>

      <CardContent>
        {isCreatingOrder ? (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) : (
          <>
            {!isCreatingOrder && !dataCreate && (
              <Alert className="">
                <AlertTitle className="font-bold">Ocurrio un error!</AlertTitle>
                <AlertDescription className="mb-4">
                  Llamentamos las molestias
                </AlertDescription>
                <Link to="/catalogo" className="mt-2">
                  <Button>Ir al catalogo</Button>
                </Link>
              </Alert>
            )}

            {!isCreatingOrder &&
            dataCreate?.data?.msg == "Insufficient stock" ? (
              <>
                <Alert className="mb-4">
                  <AlertTitle className="font-bold">
                    Ocurrio un error!
                  </AlertTitle>
                  <AlertDescription>
                    No hay stock de este producto, lamentamos las molestias
                  </AlertDescription>
                </Alert>
              </>
            ) : (
              <>
                {preferenceId && initPoint && (
                  <>
                    <CardContent className="grid gap-6"></CardContent>

                    <CardFooter className="flex justify-center">
                      <a href={initPoint} target="_blank">
                        <Button variant="outline">
                          <img
                            className="block max-w-[30px]"
                            src="https://logowik.com/content/uploads/images/mercado-pago3162.logowik.com.webp"
                          />
                          <p>Pagar con Mercado Pago</p>
                        </Button>
                      </a>
                    </CardFooter>
                  </>
                )}
              </>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
