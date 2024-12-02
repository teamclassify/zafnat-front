import { useQuery } from "react-query";
import Filter from "../../components/custom/Filter";
import { LoadingGrid } from "../../components/custom/Loading";
import { PaginationDefault } from "../../components/custom/Pagination";
import { Title } from "../../components/custom/Title";
import { columnsInvoices } from "../../components/tables/orders/Columns";
import DataTable from "../../components/tables/orders/DataTable";
import AdminTemplate from "../../components/templates/AdminTemplate";
import { Input } from "../../components/ui/input";
import { optionsInvoices } from "../../hooks/useOptionsFilters";
import InvoicesService from "../../services/api/InvoicesService";
import Csv from "./components/CSV";

export default function Invoices() {
  const { data, isLoading } = useQuery(["invoices"], () => {
    return InvoicesService.getAll();
  });

  return (
    <AdminTemplate>
      <main>
        <Title title="Facturas" />
        <div className="flex flex-row justify-between gap-2">
          <Input />
          <Filter options={optionsInvoices} />
          <Csv />
        </div>

        {isLoading ? (
          <LoadingGrid />
        ) : (
          <>
            <div className="pt-3">
              <DataTable columns={columnsInvoices} data={data || []} />
            </div>
            <PaginationDefault />
          </>
        )}
      </main>
    </AdminTemplate>
  );
}
