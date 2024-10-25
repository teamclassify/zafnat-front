import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { OptionButton } from "./OptionsButton";
import { SelectOption } from "./SelectOptions";

const roles = ["Gerente", "Administrador", "Ventas", "Almacen", "Marketing"];

export function CardInfoUser({ name, email, rol, handleDeleteUser }) {
  const [selectedRoles, setSelectedRoles] = useState(rol);

  const handleRoleSelect = (selectedRol) => {
    if (!selectedRoles.includes(selectedRol)) {
      setSelectedRoles([...selectedRoles, selectedRol]);
    }else{
      setSelectedRoles(selectedRoles.filter((r) => r !== selectedRol));
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{name}</CardTitle>
          <OptionButton name={name} email={email} rol={selectedRoles} handleRoleSelect={handleRoleSelect} handleDeleteUser={handleDeleteUser} />
        </div>
        <CardDescription>{email}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="roles">Roles y Permisos</Label>
              <SelectOption rol={selectedRoles} title={selectedRoles[0]} />
              <SelectOption
                rol={roles.filter((role) => !selectedRoles.includes(role))}
                title={"Asignar más roles"}
                handleRoleSelect={handleRoleSelect}
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
