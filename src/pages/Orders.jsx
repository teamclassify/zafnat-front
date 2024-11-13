import Filter from "../components/custom/Filter";
import { PaginationDefault } from "../components/custom/Pagination";
import { Title } from "../components/custom/Title";
import { columns } from "../components/tables/orders/Columns";
import DataTable from "../components/tables/orders/DataTable";
import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "../components/ui/input";

export default function Orders() {
  const data = [
    { id: "001", date: "2023-11-01", total: "$150.00", status: "Entregado" },
    { id: "002", date: "2023-11-03", total: "$200.00", status: "Pendiente" },
    { id: "003", date: "2023-11-05", total: "$75.00", status: "En tránsito" },
    { id: "004", date: "2023-11-07", total: "$320.00", status: "Entregado" },
    { id: "005", date: "2023-11-09", total: "$180.00", status: "Cancelado" },
    { id: "006", date: "2023-11-10", total: "$210.00", status: "Entregado" },
    { id: "007", date: "2023-11-11", total: "$95.00", status: "Pendiente" },
    { id: "008", date: "2023-11-12", total: "$145.00", status: "En tránsito" },
    { id: "009", date: "2023-11-13", total: "$160.00", status: "Entregado" },
    { id: "010", date: "2023-11-14", total: "$50.00", status: "Cancelado" },
  ];
  

  return (
    <AdminTemplate>
      <main>
        <Title title="Pedidos" />
        <div className="flex flex-row justify-between">
          <Input />
          <Filter
            options={[
              "Fecha reciente",
              "Más antiguo",
              "Mayor compra",
              "Menor compra",
              "Completado",
            ]}
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
