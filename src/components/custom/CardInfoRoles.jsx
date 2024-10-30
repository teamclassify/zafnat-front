import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardInfoRoles({ nameRol, count }) {
  return (
    <Card className="">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{nameRol}</CardTitle>
        </div>
        <CardDescription>Usuarios con este rol: {count}</CardDescription>
      </CardHeader>
    </Card>
  );
}
