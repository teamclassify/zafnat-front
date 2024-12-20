import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useQuery } from "react-query";
import Filter from "../components/custom/Filter";
import { Loading, LoadingGrid } from "../components/custom/Loading";
import { UserGrid } from "../components/custom/UserGrid";
import AdminTemplate from "../components/templates/AdminTemplate";
import RolesService from "../services/api/RolesService";
import UsersService from "../services/api/UsersService";

export default function InfoUserPage() {
  const [filter, setFilter] = useState([]);

  const { data, isLoading } = useQuery(["users", filter], () =>
    UsersService.getAll(filter)
  );
  const { data: dataRoles, isLoading: isLoadingRoles } = useQuery(
    "roles",
    RolesService.getAll
  );

  const handleRoleSelect = (role) => {
    setFilter(role);
  };

  const optionsRoles = dataRoles?.data
  ? {
      roles: dataRoles.data.map((role) => ({
        name: role.name,
      })),
    }
  : { roles: [] };

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
              <Loading />
            ) : (
              <Filter
                options={optionsRoles}
                handleSelect={handleRoleSelect}
              />
            )}
          </div>
          <div className="pt-10">
            {isLoading ? (
              <LoadingGrid />
            ) : (
              <>
                {data?.data?.length > 0 ? (
                  <UserGrid
                    users={data?.data ?? []}
                    roles={dataRoles?.data ?? []}
                  />
                ) : (
                  <p>No hay usuarios</p>
                )}
              </>
            )}
          </div>
          <div className="pt-5">{/* <PaginationDefault /> */}</div>
        </div>
      </AdminTemplate>
    </>
  );
}
