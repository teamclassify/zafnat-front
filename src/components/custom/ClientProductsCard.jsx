import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

export function ClientsProductsCard({ products }) {
  return (
    <div className="flex flex-col flex-wrap gap-4 justify-start w-full">
      {" "}
      {products.length > 0 ? (
        products.map((product) => {
          const averageRating =
            product.reviews.reduce((sum, review) => sum + review.rating, 0) /
            product.reviews.length;

          const imageUrl = product.photos[0]?.value
            ? `/images/${product.photos[0].value}`
            : null;

          return (
            <Card
              key={product.id}
              className="w-full max-w-xl p-4 shadow-md rounded-lg flex items-start gap-4"
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={`Imagen de ${product.name}`}
                  className="h-28 w-28 object-cover rounded-lg"
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
                      {`${product.skus[0]?.price.toLocaleString()}$`}
                    </p>
                    <p>
                      <span className="font-semibold">Stock:</span>{" "}
                      {product.skus[0]?.quantity}
                    </p>
                    <p>
                      <span className="font-semibold">Categoría:</span>{" "}
                      {product.category.name}
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
