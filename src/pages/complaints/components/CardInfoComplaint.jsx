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
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        </div>

        <div className="mt-4 space-y-2">
          <CardDescription className="font-semibold">
            <span className="text-gray-500">Producto:</span> {reviews.product}
          </CardDescription>
          <CardDescription className="font-semibold">
            <span className="text-gray-500">Fecha:</span> {reviews.date}
          </CardDescription>
          <CardDescription className="font-semibold">
            <span className="text-gray-500">Calificación:</span> {reviews.rating}
          </CardDescription>
          <CardDescription className="font-semibold">
            <span className="text-gray-500">Asunto:</span> {reviews.subject}
          </CardDescription>
          <CardDescription className="font-semibold">
            <span className="text-gray-500">Descripción:</span> {reviews.description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
