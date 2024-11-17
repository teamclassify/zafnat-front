import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import Review from "./Review";
import StatsProductGrid from "./StatsProductGrid";

export default function CardProduct({ title, progress }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col justify-between gap-4">
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>{progress ? <StatsProductGrid /> : <Review />}</CardContent>
    </Card>
  );
}
