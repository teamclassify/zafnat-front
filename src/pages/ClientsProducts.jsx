import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { ClientsProductsCard } from "../components/custom/ClientProductsCard";
import { PaginationDefault } from "../components/custom/Pagination";
import { useProductFilter, optionsProductAdmin } from "../hooks/useProductFilter";
import { Title } from "../components/custom/Title";
import { LoadingGrid } from "../components/custom/loading";
import { useQuery } from "react-query";
import ProductsService from "../services/api/ProductsService";
import { useState } from "react";

export default function ProductPage() {
  const { handleProductSelect, applyFilter } = useProductFilter();
  const [searchTerm, setSearchTerm] = useState("");

  const { data, error, isLoading } = useQuery("products", () =>
    ProductsService.getAll({ status: true })
  );

  const adaptProductsData = (data) => {
    return data.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      category: { 
        name: product.categories[0]?.name || "Sin categoría" 
      },
      skus: product.ProductSku.map((sku) => ({
        price: sku.price,
        quantity: sku.quantity,
        photos: Array.isArray(sku.photos) && sku.photos.length > 0
          ? sku.photos.map((photo) => ({ value: photo?.value || "Sin imagen" }))
          : [], 
      })),
      reviews: product.reviews || [],
    }));
  };

  const filteredProducts = data ? applyFilter(adaptProductsData(data.data)) : [];

  const searchFilteredProducts = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminTemplate>
      <div className="mx-8">
        <Title title={"Productos"} />
        <div className="flex justify-start gap-2">
          <Input
            type="text"
            placeholder="Buscar por nombre, categoría, etc..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Filter options={optionsProductAdmin} handleSelect={handleProductSelect} />
        </div>
        <div className="pt-5 gap-3">
          {isLoading ? (
            <LoadingGrid />
          ) : (
            <>
              {error ? (
                <div>Error: {error.message}</div>
              ) : (
                <ClientsProductsCard products={searchFilteredProducts} />
              )}
            </>
          )}
        </div>
        <div className="pt-5">
          <PaginationDefault />
        </div>
      </div>
    </AdminTemplate>
  );
}

