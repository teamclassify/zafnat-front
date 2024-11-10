import { Input } from "@/components/ui/input";
import { useQuery } from "react-query";
import Filter from "../components/custom/Filter";
import { UserGrid } from "../components/custom/UserGrid";
import AdminTemplate from "../components/templates/AdminTemplate";
import RolesService from "../services/api/RolesService";
import UsersService from "../services/api/UsersService";

export default function InfoUserPage() {
  const { data, isLoading } = useQuery("users", UsersService.getAll);
  const { data: dataRoles, isLoading: isLoadingRoles } = useQuery(
    "roles",
    RolesService.getAll
  );

  const handleRoleSelect = (role) => {
    console.log(role);
  };

  return (
    <>
      <AdminTemplate>
        <div>
          <h3 className="scroll-m-20 pb-2 pt-6 text-2xl font-semibold tracking-tight first:mt-0">
            Usuarios
          </h3>
          <div className="flex justify-between gap-2">
            <Input type="text" placeholder="Buscar" className="w-full" />
            {isLoadingRoles ? (
              <p>Cargando...</p>
            ) : (
              <Filter
                options={dataRoles.data}
                handleSelect={handleRoleSelect}
              />
            )}
          </div>
          <div className="pt-10">
            {isLoading ? (
              <p>Cargando...</p>
            ) : (
              <UserGrid users={data.data ?? []} roles={dataRoles.data ?? []} />
            )}
          </div>
          <div className="pt-5">{/* <PaginationDefault /> */}</div>
        </div>
      </AdminTemplate>
    </>
  );
}
