import Filter from "../../components/custom/Filter";
import { PaginationDefault } from "../../components/custom/Pagination";
import { Title } from "../../components/custom/Title";
import AdminTemplate from "../../components/templates/AdminTemplate";
import { Input } from "../../components/ui/input";
import { useClientFilter } from "../../hooks/useClientFilter";
import clientReturns from "../../moks/returns.json"
import ClientReturns from "./components/ClientReturns";


export default function Returns() {
  const { options, handleClientSelect } = useClientFilter();

  return (
    <>
      <AdminTemplate>
        <div>
          <Title title={"Devoluciones"} />
          <div className="flex justify-between gap-2">
            <Input
              type="text"
              placeholder="Buscar por nombre, email, dirección, ciudad..."
              className="w-full"
            />
            <Filter options={options} handleSelect={handleClientSelect} />
          </div>
          <div className="pt-10">
            <ClientReturns client={clientReturns} />
          </div>
          <div className="pt-5">
            <PaginationDefault />
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
