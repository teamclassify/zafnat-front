import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "wouter";
import ProductPreview from "../../components/catalog/ProductPreview";
import ProductReviews from "../../components/catalog/ProductReviews";
import ReviewStars from "../../components/catalog/ReviewStars";
import { LoadingGrid } from "../../components/custom/Loading";
import DefaultTemplate from "../../components/templates/DefaultTemplate";
import ProductsService from "../../services/api/ProductsService";
import ErrorPage from "../ErrorPage";

function ProductPage() {
  const params = useParams();
  const id = params.id;

  const [selecteddSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [skuSelected, setSkuSelected] = useState(null);

  const { data, isLoading } = useQuery(["product", id], () => {
    return ProductsService.getById(id);
  });

  console.log(data);

  if (!isLoading && !data?.data) {
    return <ErrorPage />;
  }

  const product = data?.data[0].product;

  const colors = data?.data
    .map((product) => product.color_attribute)
    .reduce((acc, curr) => {
      if (acc.find((color) => color.id === curr.id)) {
        return acc;
      }

      return [...acc, curr];
    }, []);

  const sizes = data?.data
    .map((product) => product.size_attribute)
    .reduce((acc, curr) => {
      if (acc.find((size) => size.id === curr.id)) {
        return acc;
      }

      return [...acc, curr];
    }, []);

  return (
    <DefaultTemplate>
      {isLoading ? (
        <LoadingGrid />
      ) : (
        <>
          <div>
            <div className="pt-10 grid gap-4 md:grid-cols-2">
              <div>
                <ProductPreview
                  images={[
                    "http://zafnat.epizy.com/wp-content/uploads/2022/04/275794641_4982413095177295_8624581813397849886_n-300x300.jpg",
                    "http://zafnat.epizy.com/wp-content/uploads/2022/04/278214615_5064259293659341_6017826772153570806_n-300x300.jpg",
                  ]}
                />
              </div>

              <div>
                <h1 className="text-4xl font-bold">{product.name}</h1>

                <div className="my-4">
                  <ReviewStars rating={4} />
                </div>

                <p className="text-2xl font-bold">$ {skuSelected?.price ?? ""}</p>

                <div className="my-4">
                  <h3 className="text-lg font-bold mb-2">Talla</h3>

                  <div className="flex gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => {
                          setSelectedSize(size);
                          setSkuSelected(
                            data.data.find(
                              (product) =>
                                product.size_attribute.id === size.id &&
                                product.color_attribute.id === selectedColor?.id
                            )
                          );
                        }}
                        className={`bg-gray-200 px-4 py-2 rounded-lg ${
                          selecteddSize?.id === size.id
                            ? "border-2 border-black"
                            : ""
                        }`}
                      >
                        {size.value}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Color</h3>

                  <div className="flex gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => {
                          setSelectedColor(color);
                          setSkuSelected(
                            data.data.find(
                              (product) =>
                                product.size_attribute.id ===
                                  selecteddSize?.id &&
                                product.color_attribute.id === color.id
                            )
                          );
                        }}
                        className={`bg-gray-200 px-4 py-2 rounded-lg color-product-${color.value.toLowerCase()} ${
                          selectedColor?.id === color.id
                            ? "border-2 border-black"
                            : ""
                        }`}
                      >
                        {color.value}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="account" className="my-20">
              <TabsList className="w-full">
                <TabsTrigger value="description" className="w-full">
                  Descripcion
                </TabsTrigger>
                <TabsTrigger value="info" className="w-full">
                  Informacion adicional
                </TabsTrigger>
                <TabsTrigger value="reviews" className="w-full">
                  Reseñas
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="description"
                className="p-4 text-sm text-zinc-600"
              >
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Déjate llevar por la nostalgia de los 80 con nuestros jeans de
                  tiro alto. Su corte clásico y su tejido denim rígido con un
                  ligero desteñido te proporcionarán un look auténtico y lleno
                  de estilo. El talle alto realza tu figura y el ajuste ceñido
                  te garantiza comodidad durante todo el día. Combínalos con una
                  camiseta gráfica y unas zapatillas altas para un outfit casual
                  y moderno.
                </p>
              </TabsContent>

              <TabsContent
                value="info"
                className="p-4 text-sm text-zinc-600"
              ></TabsContent>

              <TabsContent
                value="reviews"
                className="p-4 text-sm text-zinc-600"
              >
                <ProductReviews id="1" />
              </TabsContent>
            </Tabs>
          </div>
        </>
      )}
    </DefaultTemplate>
  );
}

export default ProductPage;
