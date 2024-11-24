import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardInfoComplaint({ name, reviews }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{name}</CardTitle>
        </div>
        <CardDescription className="font-semibold">
          Producto: {reviews.product}
        </CardDescription>
        <CardDescription className="font-semibold">
          Calificación: {reviews.rating}
        </CardDescription>
        <CardDescription className="font-semibold">
          Descripción: {reviews.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
