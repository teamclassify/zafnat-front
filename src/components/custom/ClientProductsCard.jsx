import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { Link } from "wouter";

export function ClientsProductsCard({ products }) {
  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3">
      {products.length > 0 ? (
        products.map((product) => {
          // Manejo seguro de reviews
          const reviews = Array.isArray(product.reviews) ? product.reviews : [];
          const averageRating =
            reviews.length > 0
              ? reviews.reduce((sum, review) => sum + review.rating, 0) /
                reviews.length
              : 0;

          // Manejo seguro de fotos
          const photos = product.skus?.[0]?.photos || [];
          const imageUrl = photos.length > 0 ? photos[0]?.value : null;

          // Manejo seguro de skus y categoría
          const sku = product.skus?.[0] || {};
          const category = product.category?.name || "Sin categoría";

          return (
            <Link key={product.id} to={`/admin/producto/${product.id}`}>
              <Card className="p-4 shadow-md rounded-lg flex items-start gap-4">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={`Imagen de ${product.name}`}
                    className="w-1/4 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-lg font-bold">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mb-2">
                    <div className="text-sm flex flex-row gap-3">
                      <p>
                        <span className="font-semibold">Valor:</span>{" "}
                        {sku.price ? `${sku.price.toLocaleString()}$` : "N/A"}
                      </p>
                      <p>
                        <span className="font-semibold">Stock:</span>{" "}
                        {sku.quantity || "N/A"}
                      </p>
                      <p>
                        <span className="font-semibold">Categoría:</span>{" "}
                        {category}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-0">
                    <div className="flex items-center text-sm">
                      <span className="font-semibold mr-2">
                        Valoración promedio:
                      </span>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < Math.round(averageRating)
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          );
        })
      ) : (
        <Card className="w-full max-w-xl p-6 shadow-md rounded-lg">
          <CardHeader>
            <CardTitle>No hay productos disponibles</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center">
            <p className="text-gray-500">
              Intenta agregar productos para mostrarlos aquí.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
