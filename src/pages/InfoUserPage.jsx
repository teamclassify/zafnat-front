import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { UserGrid } from "../components/custom/UserGrid";
import { PaginationDefault } from "../components/custom/Pagination";
import { useUserFilter } from "../hooks/useUserFilter";

const roles = ["Gerente", "Administrador", "Ventas", "Almacen", "Marketing"];

export default function InfoUserPage() {
  const {users, handleDeleteUser, handleRoleSelect} = useUserFilter();

  return (
    <>
      <AdminTemplate>
        <div>
          <h3 className="scroll-m-20 pb-2 pt-6 text-2xl font-semibold tracking-tight first:mt-0 text-slate-700">
            Usuarios
          </h3>
          <div className="flex justify-between gap-2">
            <Input type="text" placeholder="Buscar" className="w-full" />
            <Filter options={roles} handleSelect={handleRoleSelect} />
          </div>
          <div className="pt-10">
            <UserGrid users={users} handleDeleteUser={handleDeleteUser} />
          </div>
          <div className="pt-5">
            <PaginationDefault />
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
