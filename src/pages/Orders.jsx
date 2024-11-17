import Filter from "../components/custom/Filter";
import { PaginationDefault } from "../components/custom/Pagination";
import { Title } from "../components/custom/Title";
import { columns } from "../components/tables/orders/Columns";
import DataTable from "../components/tables/orders/DataTable";
import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "../components/ui/input";
import { optionsOrders } from "../hooks/useOptionsFilters";
import { dataOrders } from "../hooks/useDataTable";

export default function Orders() {
  return (
    <AdminTemplate>
      <main>
        <Title title="Pedidos" />
        <div className="flex flex-row justify-between">
          <Input />
          <Filter options={optionsOrders} />
        </div>
        <div className="pt-3">
          <DataTable columns={columns} data={dataOrders} />
        </div>
        <PaginationDefault />
      </main>
    </AdminTemplate>
  );
}
