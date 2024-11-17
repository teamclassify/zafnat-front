import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import StatsProductGrid from "./StatsProductGrid";

export default function CardProduct({ title }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col justify-between gap-4">
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <StatsProductGrid />
      </CardContent>
    </Card>
  );
}
