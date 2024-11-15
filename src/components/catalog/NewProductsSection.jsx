import { useQuery } from "react-query";
import { Link } from "wouter";
import ProductsService from "../../services/api/ProductsService";
import { LoadingGrid } from "../custom/Loading";
import { Button } from "../ui/button";
import ListOfProducts from "./ListOfProducts";

function NewProductsSection() {
  const { data, error, isLoading } = useQuery(
    "products",
    ProductsService.getAll
  );

  console.log(data);

  return (
    <section>
      <div className="mb-12">
        <h2 className="text-2xl font-bold">Nuevas prendas</h2>
      </div>

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

      <div className="flex justify-center mt-12">
        <Link href="/catalogo">
          <Button variant="link">Ver más</Button>
        </Link>
      </div>
    </section>
  );
}

export default NewProductsSection;
