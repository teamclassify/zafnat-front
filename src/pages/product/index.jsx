import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (data && data.data && data.data.length > 0) {
      setSelectedSize(sizes[0]);
      setSelectedColor(colors[0]);

      const sku = data.data.find(
        (product) =>
          product.size_attribute.id === sizes[0].id &&
          product.color_attribute.id === colors[0].id
      );

      if (sku) setSkuSelected(sku);
    }
  }, [data?.data]);

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
                  images={
                    skuSelected
                      ? skuSelected?.photos.map((photo) => photo.value)
                      : []
                  }
                />
              </div>

              <div>
                <h1 className="text-4xl font-bold">{product.name}</h1>

                <div className="my-4">
                  <ReviewStars rating={4} />
                </div>

                <p className="text-2xl font-bold">
                  $ {skuSelected?.price ?? ""}
                </p>

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
                        className={`bg-gray-100 px-4 py-2 text-sm uppercase rounded-lg ${
                          selecteddSize?.id === size.id
                            ? " bg-zinc-800 text-white"
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
                        className={`bg-gray-100 text-sm capitalize px-4 py-2 rounded-lg color-product-${color.value.toLowerCase()} ${
                          selectedColor?.id === color.id
                            ? " bg-zinc-800 text-white"
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

            <Tabs defaultValue="description" className="my-20">
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
                  {product?.description ?? "Sin descripción"}
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
