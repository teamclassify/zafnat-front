import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Stadistic } from "./stadistic";

export default function Graphic({ title, data, total}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col justify-between gap-4">
          <CardTitle>{title}</CardTitle>
          <CardTitle className="text-4xl">{total}</CardTitle>
        </div>
        <CardDescription>+{total/100}% respecto al mes pasado</CardDescription>
      </CardHeader>
      <CardContent className="pl-0">
        <Stadistic data={data}/>
      </CardContent>
    </Card>
  );
}
