import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OptionButton } from "../../../components/custom/OptionsButton";

export function CardReturn({ client }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Cliente: {client.customer}</CardTitle>
          <OptionButton name={client.customer} />
        </div>
        <CardDescription>Fecha: {client.date}</CardDescription>
        <CardDescription>
          Producto a devolver: {client.returnedProduct.type}
        </CardDescription>
        <CardDescription>Motivo: {client.reason}</CardDescription>
      </CardHeader>
    </Card>
  );
}
