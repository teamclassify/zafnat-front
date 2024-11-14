import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Truck, Store, Plane } from "lucide-react";

export default function ShippingInfo({ title, description, icon }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
          {icon &&
            (icon === "Truck" ? (
              <Truck />
            ) : icon === "Store" ? (
              <Store />
            ) : icon === "Airplane" ? (
              <Plane />
            ) : null)}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
