import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { PaginationDefault } from "../components/custom/Pagination";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { roles } from "../moks/roles.json";
import {RolesGrid}  from "../components/custom/RolesGrid";
import { Button } from "../components/ui/button";

const rolesDefault = [
  "Gerente",
  "Administrador",
  "Ventas",
  "Almacen",
  "Marketing",
];

export default function ManageRolePage() {
  const handleSelect = () =>{

  }
  
  return (
    <>
      <AdminTemplate>
        <div>
          <div>
            <h3 className="scroll-m-20 pb-2 pt-6 text-2xl font-semibold tracking-tight first:mt-0 text-slate-700">
              Crear rol
            </h3>
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
                <Button>Crear</Button>
              </div>
            </Card>
          </div>
          <h3 className="scroll-m-20 pb-2 pt-6 text-2xl font-semibold tracking-tight first:mt-0 text-slate-700">
            Roles
          </h3>
          <div className="flex justify-between gap-2">
            <Input type="text" placeholder="Buscar" className="w-full" />
            <Filter
              options={rolesDefault} handleSelect={handleRoleSelect}
            />
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
