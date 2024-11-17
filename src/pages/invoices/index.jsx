import Filter from "../../components/custom/Filter";
import { PaginationDefault } from "../../components/custom/Pagination";
import { Title } from "../../components/custom/Title";
import { columnsInvoices } from "../../components/tables/orders/Columns";
import DataTable from "../../components/tables/orders/DataTable";
import AdminTemplate from "../../components/templates/AdminTemplate";
import { Input } from "../../components/ui/input";
import { optionsInvoices } from "../../hooks/useOptionsFilters";
import { dataInvoices } from "../../hooks/useDataTable";

export default function Invoices() {
  return (
    <AdminTemplate>
      <main>
        <Title title="Facturas" />
        <div className="flex flex-row justify-between">
          <Input />
          <Filter options={optionsInvoices} />
        </div>
        <div className="pt-3">
          <DataTable columns={columnsInvoices} data={dataInvoices} />
        </div>
        <PaginationDefault />
      </main>
    </AdminTemplate>
  );
}
