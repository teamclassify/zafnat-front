import AccordionFilter from "../components/custom/AccordionFilter";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { PaginationDefault } from "../components/custom/Pagination";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import { products } from "../moks/products.json";
import { ProductGrid } from "../components/custom/ProductGrid";

export default function ProductCatalog() {
  const handleFilter = (filter) => {
    //Se envia a la API
    console.log(filter);
  };
  return (
    <DefaultTemplate>
      <main className="w-[95%] mx-auto max-w-screen-lg">
        <BreadcrumbResponsive />
        <div className="flex justify-between pt-4">
          <AccordionFilter handleFilter={handleFilter} />
          <div className="flex flex-col justify-center items-center gap-10">
            <ProductGrid products={products} />
            <PaginationDefault />
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
}
