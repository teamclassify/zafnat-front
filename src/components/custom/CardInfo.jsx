import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EllipsisVerticalIcon } from "lucide-react";
import { useState } from "react";

// import { Shield } from "lucide-react";

const roles = ["Gerente", "Administrador", "Ventas", "Almacen", "Marketing"];

export function CardInfo() {
  // const [filter, setFiler] = useState("")
  const [rol, setRol] = useState(["Administrador"]);

  const handleRoleSelect = (selectRol) => {
    setRol([...rol, selectRol]);
  };

  return (
    <Card className="w-[320px]">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Gianfranco Daniele</CardTitle>
          <EllipsisVerticalIcon color="gray" cursor="pointer"/>
        </div>
        <CardDescription>gianfrancoarnoldods@gmail.com</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="roles">Roles y Permisos</Label>
              <Select>
                <SelectTrigger id="roles">
                  <SelectValue placeholder={rol[0]} />
                </SelectTrigger>
                <SelectContent>
                  <div>
                    {rol.map((role) => (
                      <SelectItem key={role} value={role}>
                        <div className="flex gap-2 items-center">{role}</div>
                      </SelectItem>
                    ))}
                  </div>
                </SelectContent>
              </Select>
              <Select onValueChange={handleRoleSelect}>
                <SelectTrigger id="roles">
                  <SelectValue placeholder="Asignar más roles">
                    Asignar más roles
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <div>
                    {roles.map((role) => {
                      return (
                        !rol.includes(role) && (
                          <SelectItem key={role} value={role}>
                            <div className="flex gap-2 items-center">
                              {role}
                            </div>
                          </SelectItem>
                        )
                      );
                    })}
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
