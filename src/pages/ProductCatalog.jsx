import AccordionFilter from "../components/custom/AccordionFilter";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Button } from "../components/ui/button";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import { products } from "../moks/products.json";
import { ProductGrid } from "../components/custom/ProductGrid";

export default function ProductCatalog() {
  return (
    <DefaultTemplate>
      <BreadcrumbResponsive />
      <div className="flex justify-between pt-4">
        <AccordionFilter />
        <div className="flex flex-col justify-center items-center gap-10">
          <ProductGrid products={products} />
          <Button className="w-1/5">Ver más</Button>
        </div>
      </div>
    </DefaultTemplate>
  );
}
