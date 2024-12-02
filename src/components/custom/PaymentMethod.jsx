import { initMercadoPago } from "@mercadopago/sdk-react";

import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import useCart from "../../hooks/useCart";
import useUser from "../../hooks/useUser";
import CartService from "../../services/api/CartService";
import OrdersService from "../../services/api/OrdersServices";
import { LoadingGrid } from "../custom/Loading";
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

  const { mutate: createOrder, isLoading: isCreatingOrder } = useMutation(
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
    <Card className="flex flex-col w-2/4">
      <CardHeader>
        <CardDescription>
          Agrega un nuevo método de pago a tu cuenta
        </CardDescription>
      </CardHeader>

      {isCreatingOrder ? (
        <LoadingGrid />
      ) : (
        <>
          {preferenceId && initPoint && (
            <>
              <CardContent className="grid gap-6"></CardContent>
              <CardFooter className="flex flex-row justify-end">
                <a href={initPoint} target="_blank">
                  <Button type="submit">Pagar</Button>
                </a>
              </CardFooter>
            </>
          )}
        </>
      )}
    </Card>
  );
}
