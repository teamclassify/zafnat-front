import { Input } from "@/components/ui/input";
import { useQuery } from "react-query";
import { ClientGrid } from "../components/custom/ClientGrid";
import Filter from "../components/custom/Filter";
import { LoadingGrid } from "../components/custom/Loading";
import { PaginationDefault } from "../components/custom/Pagination";
import { Title } from "../components/custom/Title";
import AdminTemplate from "../components/templates/AdminTemplate";
import { useClientFilter } from "../hooks/useClientFilter";
import UsersService from "../services/api/UsersService";

export default function InfoClientPage() {
  const { options, handleClientSelect } = useClientFilter();

  const { isLoading, data } = useQuery(["users"], () =>
    UsersService.getAll(["user"])
  );

  return (
    <>
      <AdminTemplate>
        <div>
          <Title title={"Información clientes"} />
          <div className="flex justify-between gap-2">
            <Input
              type="text"
              placeholder="Buscar por nombre, email, dirección, ciudad..."
              className="w-full"
            />
            <Filter options={options} handleSelect={handleClientSelect} />
          </div>
          <div className="pt-10">
            {isLoading ? (
              <LoadingGrid />
            ) : (
              <>
                {data?.data?.length > 0 ? (
                  <ClientGrid clients={data?.data ?? []} />
                ) : (
                  <p>No hay clientes</p>
                )}
              </>
            )}
          </div>
          <div className="pt-5">
            <PaginationDefault />
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
