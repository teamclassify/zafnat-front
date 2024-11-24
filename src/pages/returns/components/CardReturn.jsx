import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OptionButton } from "../../../components/custom/OptionsButton";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { DialogNotification } from "./Notification";
import getBadgeColor from "../../../hooks/useBadgeColor";

export function CardReturn({ client }) {
  const [status, setStatus] = useState(client.status);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (status !== client.status) {
      setIsOpen(true);
    }
  }, [status, client.status]);

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold">
              Cliente: {client.customer}
            </CardTitle>
            <Badge className={getBadgeColor(status)}>{status}</Badge>
            <OptionButton
              options={["Pendiente", "En proceso", "Completado", "Rechazado"]}
              setStatus={setStatus}
            />
          </div>

          <div className="mt-4 space-y-2">
            <CardDescription className="font-semibold">
              <span className="text-gray-500">Producto:</span>{" "}
              {client.returnedProduct.type} - {client.returnedProduct.color},
              Talla {client.returnedProduct.size}
            </CardDescription>
            <CardDescription className="font-semibold">
              <span className="text-gray-500">Fecha:</span> {client.date}
            </CardDescription>
            <CardDescription className="font-semibold">
              <span className="text-gray-500">Motivo:</span> {client.reason}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      <DialogNotification isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
