import { useQuery } from "react-query";
import { LoadingGrid } from "../../../components/custom/Loading";
import { PaginationDefault } from "../../../components/custom/Pagination";
import { columns } from "../../../components/tables/orders/Columns";
import DataTable from "../../../components/tables/orders/DataTable";
import useUser from "../../../hooks/useUser";
import OrdersService from "../../../services/api/OrdersServices";
import HeaderTab from "./HeaderTab";

function OrdersTab() {
  const { user } = useUser();

  const { data, isLoading } = useQuery(["orders", user.id], async () => {
    return OrdersService.getByUser(user.id);
  });


  console.log(data);

  return (
    <div>
      <HeaderTab title="Pedidos" />

      {isLoading ? (
        <LoadingGrid />
      ) : (
        <>
          {data && data.length > 0 ? (
            <>
              <DataTable columns={columns} data={data} />

              <PaginationDefault />
            </>
          ) : (
            <p>No hay pedidos</p>
          )}
        </>
      )}
    </div>
  );
}

export default OrdersTab;
