import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export default function Graphic({ title }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>1234</CardDescription>
      </CardHeader>

      <CardContent></CardContent>
    </Card>
  );
}
