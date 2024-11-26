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

  // Encontrar el valor del mes anterior
  const currentMonthData = data[data.length - 1];
  const previousMonthData = data[data.length - 2];

  let percentageChange = 0;
  if (previousMonthData) {
    const currentMonthValue = currentMonthData[value];
    const previousMonthValue = previousMonthData[value];

    if (previousMonthValue !== 0) {
      percentageChange = ((currentMonthValue - previousMonthValue) / previousMonthValue) * 100;
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col justify-between gap-4">
          <CardTitle>{title}</CardTitle>
          <CardTitle className="text-4xl">{total}</CardTitle>
        </div>
        <CardDescription>
          {percentageChange !== 0
            ? `+${percentageChange.toFixed(2)}% respecto al mes pasado`
            : "Sin variación respecto al mes pasado"}
        </CardDescription>
      </CardHeader>
      <CardContent className={padding}>
        <Stadistic data={data} dataKey={["month", value]} />
      </CardContent>
    </Card>
  );
}
