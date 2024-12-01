import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Link } from "wouter";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
initMercadoPago("YOUR_PUBLIC_KEY");

export default function PaymentMethod() {
  return (
    <Card className="flex flex-col w-2/4">
      <CardHeader>
        <CardDescription>
          Agrega un nuevo método de pago a tu cuenta
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div id="wallet_container"></div>
        <Wallet
          initialization={{ preferenceId: "" }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      </CardContent>
      <CardFooter className="flex flex-row justify-end">
        <Link to="/pago-realizado">
          <Button type="submit">Pagar</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
