import { useState, useMemo } from "react";
import Filter from "../../components/custom/Filter";
import { PaginationDefault } from "../../components/custom/Pagination";
import { Title } from "../../components/custom/Title";
import { columnsCategories } from "../../components/tables/orders/Columns";
import DataTable from "../../components/tables/orders/DataTable";
import AdminTemplate from "../../components/templates/AdminTemplate";
import { Input } from "../../components/ui/input";
import { optionsCategory } from "../../hooks/useOptionsFilters";
import AddButton from "./components/AddButton";
import { LoadingGrid } from "../../components/custom/Loading";
import { useDataCategories } from "../../hooks/useDataCategories";

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({});
  const itemsPerPage = 10;

  const { dataCategories, error, isLoading, refetch} = useDataCategories({
    filters: selectedFilters,
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterSelect = (filters) => {
    setSelectedFilters(filters);
    setCurrentPage(1);
  };

  const filteredCategories = useMemo(() => {
    if (!dataCategories) return [];
    return dataCategories.filter((category) =>
      category.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [dataCategories, searchTerm]);

  const totalItems = filteredCategories.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedCategories = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCategories.slice(startIndex, endIndex);
  }, [filteredCategories, currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <AdminTemplate>
      <main>
        <Title title="Categorías" />
        <div className="flex flex-row justify-between gap-2">
          <Input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Filter options={optionsCategory} handleSelect={handleFilterSelect} />
          <AddButton onCategoryAdded={refetch} />
        </div>
        <div className="pt-3">
          {isLoading ? (
            <LoadingGrid />
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            <DataTable columns={columnsCategories} data={paginatedCategories} />
          )}
        </div>
        {!isLoading && !error  && (
          <PaginationDefault
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        )}
      </main>
    </AdminTemplate>
  );
}
