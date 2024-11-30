import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { ClientsProductsCard } from "../components/custom/ClientProductsCard";
import { PaginationDefault } from "../components/custom/Pagination";
import { useProductFilter } from "../hooks/useProductFilter";
import { Title } from "../components/custom/Title";

export default function ProductPage() {
  const { products, options, handleProductSelect } = useProductFilter();

  return (
    <AdminTemplate>
      <div className="mx-8">
        <Title title={"Productos"} />
        <div className="flex justify-start gap-2">
          <Input
            type="text"
            placeholder="Buscar por nombre, categoría, etc..."
            className="w-[50%]"
          />
          <Filter options={options} handleSelect={handleProductSelect} />
        </div>
        <div className="pt-10 flex flex-col gap-3">
          <ClientsProductsCard products={products} />
        </div>
        <div className="pt-5">
          <PaginationDefault />
        </div>
      </div>
    </AdminTemplate>
  );
}
