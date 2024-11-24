import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OptionButton } from "../../../components/custom/OptionsButton";

export function CardReturn({ client }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold">
            Cliente: {client.customer}
          </CardTitle>
          <OptionButton />
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
  );
}
