import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { PaginationDefault } from "../components/custom/Pagination";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { RolesGrid } from "../components/custom/RolesGrid";
import { Button } from "../components/ui/button";
import { useRoleFilter } from "../hooks/useRoleFilter";
import { toast } from "sonner"
import { Title } from "../components/custom/Title";

export default function ManageRolePage() {
  const { roles, rolesDefault, handleRoleSelect } = useRoleFilter();

  return (
    <>
      <AdminTemplate>
        <div>
          <div>
           <Title title="Crear rol" />
            <Card className="p-7 w-2/4">
              <div className="flex flex-col gap-4">
                <div>
                  <Label>Titulo de rol *</Label>
                  <Input type="text" placeholder="Asistente Administrativo" />
                </div>
                <div>
                  <Label>Descripción *</Label>
                  <Input type="text" placeholder="El rol requiere.." />
                </div>
                <Button onClick={() => toast("Rol ha sido creado correctamente")}>Crear</Button>
              </div>
            </Card>
          </div>
          <Title title="Roles" />
          <div className="flex justify-between gap-2">
            <Input type="text" placeholder="Buscar" className="w-full" />
            <Filter options={rolesDefault} handleSelect={handleRoleSelect} />
          </div>
          <div className="pt-3">
            <RolesGrid roles={roles} />
          </div>
          <div className="pt-5">
            <PaginationDefault />
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
