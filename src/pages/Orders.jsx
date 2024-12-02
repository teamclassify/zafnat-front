import { useQuery } from "react-query";
import Filter from "../components/custom/Filter";
import { LoadingGrid } from "../components/custom/Loading";
import { PaginationDefault } from "../components/custom/Pagination";
import { Title } from "../components/custom/Title";
import { columnsAdmin } from "../components/tables/orders/Columns";
import DataTable from "../components/tables/orders/DataTable";
import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "../components/ui/input";
import { optionsOrders } from "../hooks/useOptionsFilters";
import OrdersService from "../services/api/OrdersServices";

export default function Orders() {
  const { data, isLoading } = useQuery(["orders"], () => {
    return OrdersService.getAll();
  });

  return (
    <AdminTemplate>
      <main>
        <Title title="Pedidos" />
        <div className="flex flex-row justify-between gap-2">
          <Input />
          <Filter options={optionsOrders} />
        </div>

        {isLoading ? (
          <LoadingGrid />
        ) : (
          <>
            <div className="pt-3">
              <DataTable columns={columnsAdmin} data={data || []} />
            </div>
            <PaginationDefault />
          </>
        )}
      </main>
    </AdminTemplate>
  );
}
