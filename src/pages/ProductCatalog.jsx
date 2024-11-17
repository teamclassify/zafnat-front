import { useQuery } from "react-query";
import ListOfProducts from "../components/catalog/ListOfProducts";
import AccordionFilter from "../components/custom/AccordionFilter";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import { LoadingGrid } from "../components/custom/Loading";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProductsService from "../services/api/ProductsService";

export default function ProductCatalog() {
  const { data, error, isLoading } = useQuery(
    "products",
    ProductsService.getAll
  );

  const handleFilter = (filter) => {
    //Se envia a la API
    console.log(filter);
  };

  return (
    <DefaultTemplate>
      <BreadcrumbResponsive />
      <div className="grid md:grid-cols-[0.3fr,1fr] pt-4">
        <AccordionFilter handleFilter={handleFilter} />
        <div className="">
          {isLoading ? (
            <LoadingGrid />
          ) : (
            <>
              {error ? (
                <div>Error: {error.message}</div>
              ) : (
                <ListOfProducts products={data.data} />
              )}
            </>
          )}

          {/* <PaginationDefault /> */}
        </div>
      </div>
    </DefaultTemplate>
  );
}
