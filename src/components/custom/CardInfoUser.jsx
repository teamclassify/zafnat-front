import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "sonner";
import RolesService from "../../services/api/RolesService";
import { Checkbox } from "../ui/checkbox";

export function CardInfoUser({ id, firstName, email, roles, rolesOptions }) {
  const [selectedRoles, setSelectedRoles] = useState(roles);

  const mutateSetRole = useMutation(
    (data) => {
      return RolesService.setRole(data.userId, data.roleId);
    },
    {
      onSuccess: (data) => {
        toast.success("Rol asignado correctamente");

        if (data.error) {
          toast.error(data.error);
        }
      },
      onError: (error) => {
        toast.error("Error al asignar el rol");
        console.log(error);
      },
    }
  );

  const mutateUnsetRole = useMutation(
    (data) => {
      const promise = RolesService.unsetRole(data.userId, data.roleId);

      return promise;
    },
    {
      onSuccess: (data) => {
        toast.success("Rol eliminado correctamente");

        if (data.error) {
          toast.error(data.error);
        }
      },
      onError: (error) => {
        toast.error("Error al eliminar el rol");
        console.log(error);
      },
    }
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{firstName}</CardTitle>
          {/* <OptionButton name={firstName} email={email} rol={selectedRoles} /> */}
        </div>
        <CardDescription>{email}</CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex gap-4">
            {/* <SelectOption rol={selectedRoles} title={selectedRoles[0]} /> */}
            {/* <SelectOption
                rol={roles.filter((role) => !selectedRoles.includes(role))}
                title={"Asignar más roles"}
              /> */}

            {rolesOptions.map((role) => (
              <div key={role.id} className="flex items-center gap-2 text-sm">
                <label htmlFor={`${role.id}-${email}`}>{role.name}</label>
                <Checkbox
                  id={`${role.id}-${email}`}
                  checked={
                    selectedRoles.find((r) => r.roleId === role.id)
                      ? true
                      : false
                  }
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedRoles([...selectedRoles, { roleId: role.id }]);
                      mutateSetRole.mutate({
                        userId: id,
                        roleId: role.id,
                      });
                    } else {
                      setSelectedRoles(
                        selectedRoles.filter((r) => r.roleId !== role.id)
                      );
                      mutateUnsetRole.mutate({
                        userId: id,
                        roleId: role.id,
                      });
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
