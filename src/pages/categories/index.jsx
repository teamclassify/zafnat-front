import Filter from "../../components/custom/Filter";
import { PaginationDefault } from "../../components/custom/Pagination";
import { Title } from "../../components/custom/Title";
import { columnsCategories } from "../../components/tables/orders/Columns";
import DataTable from "../../components/tables/orders/DataTable";
import AdminTemplate from "../../components/templates/AdminTemplate";
import { Input } from "../../components/ui/input";
import { optionsCategory } from "../../hooks/useOptionsFilters";
import AddButton from "./components/AddButton";
import { LoadingGrid } from "../../components/custom/loading";
import { useDataCategories } from "../../hooks/useDataCategories";
import { useState } from "react";

export default function Categories() {
  const [filters, setFilters] = useState({});
  const { dataCategories, error, isLoading } = useDataCategories({ filters });

  const handleSelect = (optionSelected) => {
    setFilters(optionSelected);
  };

  return (
    <AdminTemplate>
      <main>
        <Title title="Categorias" />
        <div className="flex flex-row justify-between gap-2">
          <Input />
          <Filter options={optionsCategory} handleSelect={handleSelect} />
          <AddButton />
        </div>
        <div className="pt-3">
          {isLoading ? (
            <LoadingGrid />
          ) : (
            <>
              {error ? (
                <div>Error: {error.message}</div>
              ) : (
                <DataTable columns={columnsCategories} data={dataCategories} />
              )}
            </>
          )}
        </div>
        <PaginationDefault />
      </main>
    </AdminTemplate>
  );
}
