import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Stadistic } from "./stadistic";

export default function Graphic({ title, data, total, value }) {
  const padding = value === "ingresos" ? "pl-7" : "pl-0";
  const totalMonth = value === "ingresos" ? "3400" : total;
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col justify-between gap-4">
          <CardTitle>{title}</CardTitle>
          <CardTitle className="text-4xl">{total}</CardTitle>
        </div>
        <CardDescription>
          +{totalMonth / 100}% respecto al mes pasado
        </CardDescription>
      </CardHeader>
      <CardContent className={padding}>
        <Stadistic data={data} dataKey={["month", value]} />
      </CardContent>
    </Card>
  );
}
