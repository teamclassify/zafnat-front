import Filter from "../../components/custom/Filter";
import { PaginationDefault } from "../../components/custom/Pagination";
import { Title } from "../../components/custom/Title";
import { columnsInvoices} from "../../components/tables/orders/Columns";
import DataTable from "../../components/tables/orders/DataTable";
import AdminTemplate from "../../components/templates/AdminTemplate";
import { Input } from "../../components/ui/input";
import { optionsInvoices } from "../../hooks/useOptionsFilters";

export default function Invoices() {
  const data = [
    { id: "001", cliente: "Mauricio", cantidad: "$150.000", status: "Pagado" },
    { id: "002", cliente: "Andersson", cantidad: "$200.000", status: "Pagado" },
    { id: "003", cliente: "Gianfranco", cantidad: "$75.000", status: "Pagado" },
    { id: "004", cliente: "Andrés", cantidad: "$320.000", status: "Pagado" },
    { id: "005", cliente: "Lupita", cantidad: "$180.000", status: "Pagado" },
    { id: "006", cliente: "Carolina", cantidad: "$210.000", status: "Pagado" },
    { id: "007", cliente: "Juliana", cantidad: "$95.000", status: "Pagado" },
    { id: "008", cliente: "Ricardo", cantidad: "$145.000", status: "Pagado" },
    { id: "009", cliente: "Sofía", cantidad: "$160.000", status: "Pagado" },
    { id: "010", cliente: "Emilia", cantidad: "$50.000", status: "Debe" },
  ];  
  

  return (
    <AdminTemplate>
      <main>
        <Title title="Facturas" />
        <div className="flex flex-row justify-between">
          <Input />
          <Filter
            options={optionsInvoices}
          />
        </div>
        <div className="pt-3">
          <DataTable columns={columnsInvoices} data={data} />
        </div>
        <PaginationDefault />
      </main>
    </AdminTemplate>
  );
}
