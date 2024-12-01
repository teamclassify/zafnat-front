import { Input } from "@/components/ui/input";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { ClientsProductsCard } from "../components/custom/ClientProductsCard";
import Filter from "../components/custom/Filter";
import { PaginationDefault } from "../components/custom/Pagination";
import { Title } from "../components/custom/Title";
import { LoadingGrid } from "../components/custom/loading";
import AdminTemplate from "../components/templates/AdminTemplate";
import { useProductFilter } from "../hooks/useProductFilter";
import ProductsService from "../services/api/ProductsService";

export default function ProductPage() {
  const { options, handleProductSelect, applyFilter } = useProductFilter();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const itemsPerPage = 10;

  const { data, error, isLoading } = useQuery("products", () =>
    ProductsService.getAll({ status: true })
  );

  const adaptProductsData = (productsData) => {
    if (!productsData || !Array.isArray(productsData)) return [];
    return productsData.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      category: {
        name: product.categories[0]?.name || "Sin categoría",
      },
      skus: Array.isArray(product.ProductSku)
        ? product.ProductSku.map((sku) => ({
            price: sku.price,
            quantity: sku.quantity,
            photos:
              Array.isArray(sku.photos) && sku.photos.length > 0
                ? sku.photos.map((photo) => ({
                    value: photo?.value || "Sin imagen",
                  }))
                : [],
          }))
        : [],
      reviews: product.reviews || [],
    }));
  };

  const filteredProducts = useMemo(() => {
    if (!data) return [];
    const adaptedData = adaptProductsData(data.data);
    return applyFilter(adaptedData, selectedFilters);
  }, [data, selectedFilters, applyFilter]);

  const searchFilteredProducts = useMemo(() => {
    return filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [filteredProducts, searchTerm]);

  const totalItems = searchFilteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedProducts = useMemo(() => {
    return searchFilteredProducts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [searchFilteredProducts, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedFilters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterSelect = (filters) => {
    setSelectedFilters(filters);
    handleProductSelect(filters);
  };

  return (
    <AdminTemplate>
      <div className="mx-8">
        <Title title="Productos" />
        <div className="flex justify-start gap-2">
          <Input
            type="text"
            placeholder="Buscar por nombre, categoría, etc..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Filter options={options} handleSelect={handleFilterSelect} />
        </div>
        <div className="pt-5 gap-3">
          {isLoading ? (
            <LoadingGrid />
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            <ClientsProductsCard products={paginatedProducts} />
          )}
        </div>
        {!isLoading && !error && totalPages > 1 && (
          <PaginationDefault
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        )}
      </div>
    </AdminTemplate>
  );
}
