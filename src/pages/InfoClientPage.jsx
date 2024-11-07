import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { ClientGrid } from "../components/custom/ClientGrid";
import { PaginationDefault } from "../components/custom/Pagination";
import { useClientFilter } from "../hooks/useClientFilter";
import { Title } from "../components/custom/Title";


export default function InfoClientPage() {
  const {clients, options, handleClientSelect} = useClientFilter()

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
            <ClientGrid client={clients} />
          </div>
          <div className="pt-5">
            <PaginationDefault />
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
