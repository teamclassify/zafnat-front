import Filter from "../../components/custom/Filter";
import { PaginationDefault } from "../../components/custom/Pagination";
import { Title } from "../../components/custom/Title";
import { columnsCategories } from "../../components/tables/orders/Columns";
import DataTable from "../../components/tables/orders/DataTable";
import AdminTemplate from "../../components/templates/AdminTemplate";
import { Input } from "../../components/ui/input";
import { dataCategories } from "../../hooks/useDataTable";
import { optionsInvoices } from "../../hooks/useOptionsFilters";
import AddButton from "./components/AddButton";


export default function Categories() {
  return (
    <AdminTemplate>
      <main>
        <Title title="Categorias" />
        <div className="flex flex-row justify-between gap-2">
          <Input />
          <Filter options={optionsInvoices} />
          <AddButton />
        </div>
        <div className="pt-3">
          <DataTable columns={columnsCategories} data={dataCategories} />
        </div>
        <PaginationDefault />
      </main>
    </AdminTemplate>
  );
}
