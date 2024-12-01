import Filter from "../../components/custom/Filter";
import { PaginationDefault } from "../../components/custom/Pagination";
import { Title } from "../../components/custom/Title";
import { columnsHistory } from "../../components/tables/orders/Columns";
import DataTable from "../../components/tables/orders/DataTable";
import AdminTemplate from "../../components/templates/AdminTemplate";
import { Input } from "../../components/ui/input";
import { dataHistory } from "../../hooks/useDataTable";
import { optionsOrders } from "../../hooks/useOptionsFilters";

export default function History() {
  return (
    <AdminTemplate>
      <main>
        <Title title="Historial de cambios" />
        <div className="flex flex-row justify-between gap-2">
          <Input />
          <Filter options={optionsOrders} />
        </div>
        <div className="pt-3">
          <DataTable columns={columnsHistory} data={dataHistory} />
        </div>
        <PaginationDefault />
      </main>
    </AdminTemplate>
  );
}
