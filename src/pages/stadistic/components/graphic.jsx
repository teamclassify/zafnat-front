import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Stadistic } from "./stadistic";

export default function Graphic({ title }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col justify-between gap-4">
          <CardTitle>{title}</CardTitle>
          <CardTitle className="text-4xl">149</CardTitle>
        </div>
        <CardDescription>+10.5% respecto al mes pasado</CardDescription>
      </CardHeader>
      <CardContent className="pl-0">
        <Stadistic />
      </CardContent>
    </Card>
  );
}
