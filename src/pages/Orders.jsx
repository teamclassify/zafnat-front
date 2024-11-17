import Filter from "../components/custom/Filter";
import { PaginationDefault } from "../components/custom/Pagination";
import { Title } from "../components/custom/Title";
import { columns } from "../components/tables/orders/Columns";
import DataTable from "../components/tables/orders/DataTable";
import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "../components/ui/input";
import { optionsOrders } from "../hooks/useOptionsFilters";

export default function Orders() {
  const data = [
    { id: "001", date: "2023-11-01", total: "$150.000", status: "Entregado" },
    { id: "002", date: "2023-11-03", total: "$200.000", status: "Pendiente" },
    { id: "003", date: "2023-11-05", total: "$75.000", status: "Pendiente" },
    { id: "004", date: "2023-11-07", total: "$320.000", status: "Entregado" },
    { id: "005", date: "2023-11-09", total: "$180.000", status: "Entregado" },
    { id: "006", date: "2023-11-10", total: "$210.000", status: "Entregado" },
    { id: "007", date: "2023-11-11", total: "$95.000", status: "Pendiente" },
    { id: "008", date: "2023-11-12", total: "$145.000", status: "Entregado" },
    { id: "009", date: "2023-11-13", total: "$160.000", status: "Entregado" },
    { id: "010", date: "2023-11-14", total: "$50.000", status: "Cancelado" },
  ];


  return (
    <AdminTemplate>
      <main>
        <Title title="Pedidos" />
        <div className="flex flex-row justify-between">
          <Input />
          <Filter
            options={optionsOrders}
          />
        </div>
        <div className="pt-3">
          <DataTable columns={columns} data={data} />
        </div>
        <PaginationDefault />
      </main>
    </AdminTemplate>
  );
}
