import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { ClientGrid } from "../components/custom/ClientGrid";
import { PaginationDefault } from "../components/custom/Pagination";
import { useClientFilter } from "../hooks/useClientFilter";


export default function InfoClientPage() {
  const {clients, options, handleClientSelect} = useClientFilter()

  return (
    <>
      <AdminTemplate>
        <div>
          <h3 className="scroll-m-20 pb-2 pt-6 text-2xl font-semibold tracking-tight first:mt-0 text-slate-700">
            Información clientes
          </h3>
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
