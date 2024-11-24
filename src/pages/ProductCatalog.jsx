import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSearch } from "wouter";
import ListOfProducts from "../components/catalog/ListOfProducts";
import AccordionFilter from "../components/custom/AccordionFilter";
import BreadcrumbResponsive from "../components/custom/BreadCrumbResponsive";
import { LoadingGrid } from "../components/custom/Loading";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProductsService from "../services/api/ProductsService";

export default function ProductCatalog() {
  const searchString = useSearch();

  const [nameSearch, setNameSearch] = useState("");

  const { data, error, isLoading } = useQuery(["products", nameSearch], () =>
    ProductsService.getAll({
      status: true,
      name: nameSearch,
    })
  );

  const handleFilter = (filter) => {
    //Se envia a la API
    console.log(filter);
  };

  useEffect(() => {
    if (searchString) {
      setNameSearch(searchString.split("=")[1]);
    }
  }, [searchString]);

  return (
    <DefaultTemplate>
      <BreadcrumbResponsive />
      <div className="grid md:grid-cols-[0.3fr,1fr] gap-8 pt-4">
        <AccordionFilter handleFilter={handleFilter} />
        <div className="">
          {isLoading ? (
            <>
              <LoadingGrid />
            </>
          ) : (
            <>
              {error ? (
                <div>Error: {error.message}</div>
              ) : (
                <>
                  {data?.data?.length > 0 ? (
                    <>
                      <p className="mb-10">
                        {nameSearch
                          ? `Resultados de la busqueda: ${nameSearch}`
                          : "Todos los productos"}
                      </p>
                      <ListOfProducts products={data?.data} />
                    </>
                  ) : (
                    <div>No se encontraron productos</div>
                  )}
                </>
              )}
            </>
          )}

          {/* <PaginationDefault /> */}
        </div>
      </div>
    </DefaultTemplate>
  );
}
