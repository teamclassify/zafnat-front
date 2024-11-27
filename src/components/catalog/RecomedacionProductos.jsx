import { useQuery } from "react-query";
import { Link } from "wouter";
import RecomendacionService from "../../services/api/RecomendacionProductos";
import { LoadingGrid } from "../custom/loading";

function RecomendacionProductos({ productId }) {
  const { data, isLoading } = useQuery(["recomendaciones", productId], () =>
    RecomendacionService.getAll(productId)
  );

  if (isLoading) {
    return (
      <div className="my-10">
        <LoadingGrid />;
      </div>
    );
  }

  console.log(data);

  if (!isLoading && (!data || data?.data?.length === 0)) {
    return <div className="my-10">No hay productos recomendados</div>;
  }

  return (
    <div className="my-10">
      <h2 className="font-bold mb-4">Productos recomendados</h2>
      <div className="">
        {data && data?.data && data?.data?.length > 0 && (
          <div className="grid grid-cols-6 gap-4">
            {data.data.map((product) => (
              <Link key={product.id} to={`/producto/${product.id}`}>
                <div className="text-center">
                  <img
                    src={product.ProductSku[0]?.photos[0]?.value}
                    alt={product.name}
                  />
                  <h3 className="mt-2 mb-2 text-sm">{product.name}</h3>
                  <p className="text-sm font-bold">
                    $
                    {new Intl.NumberFormat().format(
                      product.ProductSku[0]?.price
                    )}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecomendacionProductos;
