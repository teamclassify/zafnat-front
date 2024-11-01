import AccordionFilter from "../components/custom/AccordionFilter";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import { PaginationDefault } from "../components/custom/Pagination";
import { ProductGrid } from "../components/custom/ProductGrid";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { products } from "../moks/products.json";

export default function ProductCatalog() {
  const handleFilter = (filter) => {
    //Se envia a la API
    console.log(filter);
  };
  return (
    <DefaultTemplate>
      <BreadcrumbResponsive />
      <div className="grid md:grid-cols-[0.3fr,1fr] pt-4">
        <AccordionFilter handleFilter={handleFilter} />

        <div className="flex flex-col justify-center items-center gap-10">
          <ProductGrid products={products} />
          <PaginationDefault />
        </div>
      </div>
    </DefaultTemplate>
  );
}
