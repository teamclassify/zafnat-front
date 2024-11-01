import { PaginationDefault } from "../../../components/custom/Pagination";
import { columns } from "../../../components/tables/orders/Columns";
import DataTable from "../../../components/tables/orders/DataTable";
import HeaderTab from "./HeaderTab";

function OrdersTab() {
  const orders = [
    {
      id: 1,
      date: "12/12/2021",
      total: 100,
      status: "Entregado",
    },
    {
      id: 2,
      date: "12/12/2021",
      total: 200,
      status: "En camino",
    },
    {
      id: 3,
      date: "12/12/2021",
      total: 300,
      status: "Entregado",
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
