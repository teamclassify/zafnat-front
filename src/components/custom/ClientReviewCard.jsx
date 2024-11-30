import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GiClothes } from "react-icons/gi";

import ReviewStars from "../catalog/ReviewStars";

export function ReviewCard({ name, date, product, reviewTitle, reviewText, rating }) {
  return (
    <Card className="border rounded-lg shadow p-4 max-w-md">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{name}</CardTitle>
        </div>
        <CardDescription>Fecha: {date}</CardDescription>
        <CardDescription><ReviewStars rating={rating} /></CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2 mb-2">
          <div className="text-gray-500">
          <GiClothes />
          </div>
          <Label className="text-gray-600 text-sm">{product}</Label>
        </div>
        <h3 className="font-semibold text-sm mb-1">{reviewTitle}</h3>
        <p className="text-gray-600 text-sm">{reviewText}</p>
      </CardContent>
    </Card>
  );
}