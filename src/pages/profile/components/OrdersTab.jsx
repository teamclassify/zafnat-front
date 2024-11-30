import { PaginationDefault } from "../../../components/custom/Pagination";
import { columns } from "../../../components/tables/orders/Columns";
import DataTable from "../../../components/tables/orders/DataTable";
import HeaderTab from "./HeaderTab";

function OrdersTab() {
  const orders = [
    {
      id: 1,
      fecha: "12/12/2021",
      total: 100,
      estado: "Entregado",
    },
    {
      id: 2,
      fecha: "12/12/2021",
      total: 200,
      estado: "En camino",
    },
    {
      id: 3,
      fecha: "12/12/2021",
      total: 300,
      estado: "Entregado",
    },
  ];

  return (
    <div>
      <HeaderTab title="Pedidos" />

      <DataTable columns={columns} data={orders} />

      <PaginationDefault />
    </div>
  );
}

export default OrdersTab;
