import Filter from "../components/custom/Filter";
import { PaginationDefault } from "../components/custom/Pagination";
import { Title } from "../components/custom/Title";
import { columnsWholeSale } from "../components/tables/orders/Columns";
import DataTable from "../components/tables/orders/DataTable";
import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "../components/ui/input";
import { optionsWholeSale } from "../hooks/useOptionsFilters";
import { dataWholeSale } from "../hooks/useDataTable";

export default function WholeSale() {
  return (
    <AdminTemplate>
      <main>
        <Title title="Compras al mayor" />
        <div className="flex flex-row justify-between gap-2">
          <Input />
          <Filter options={optionsWholeSale} />
        </div>
        <div className="pt-3">
          <DataTable columns={columnsWholeSale} data={dataWholeSale} />
        </div>
        <PaginationDefault />
      </main>
    </AdminTemplate>
  );
}
