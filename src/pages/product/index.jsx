import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, useParams } from "wouter";
import ProductPreview from "../../components/catalog/ProductPreview";
import ProductReviews from "../../components/catalog/ProductReviews";
import ReviewStars from "../../components/catalog/ReviewStars";
import { LoadingGrid } from "../../components/custom/Loading";
import DefaultTemplate from "../../components/templates/DefaultTemplate";
import { Button } from "../../components/ui/button";
import CartService from "../../services/api/CartService";
import ProductsService from "../../services/api/ProductsService";
import ReviewsService from "../../services/api/ReviewsService";
import ErrorPage from "../ErrorPage";
import RecomendacionProductos from "../../components/catalog/RecomedacionProductos";
import { toast } from "sonner";
import useUser from "../../hooks/useUser";

function ProductPage() {
  const params = useParams();
  const id = params.id;

  const queryClient = useQueryClient();
  const { user } = useUser();
  const [, setLocation] = useLocation();

  const [selecteddSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [skuSelected, setSkuSelected] = useState(null);

  const { data, isLoading } = useQuery(["product", id], () => {
    return ProductsService.getById(id);
  });

  const { data: reviews, isLoading: isLoadingReviews } = useQuery(
    ["reviews", id],
    () => {
      return ReviewsService.getAll(id);
    }
  );

  const { mutate, isLoading: isLoadingMutate } = useMutation(
    (data) => {
      return CartService.create({
        productId: data.id,
        quantity: data.quantity,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products-cart");
      },
    }
  );

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

  const handleAddToCart = () => {
    if(!user){
      setLocation("/registrarse")
    }
    if (!skuSelected) return;

    mutate({ id: skuSelected.id, quantity: 1 });
  };

  const handleClick = () => {
    toast.success(
      "En unos momentos serás redirigido a WhatsApp para atención personalizada."
    );

    setTimeout(() => {
      const phoneNumber = "584247054070";
      const text = encodeURIComponent(
        "Hola, estoy interesado en comprar al mayor"
      );
      const url = `https://wa.me/${phoneNumber}?text=${text}`;

      window.open(url, "_blank", "noopener,noreferrer");
    }, 2000);
  };

  return (
    <DefaultTemplate>
      {isLoading ? (
        <LoadingGrid />
      ) : (
        <>
          <div>
            <div className="pt-10 grid gap-4 md:grid-cols-2">
              <div className="">
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
                  {isLoadingReviews ? (
                    <span>Cargando reseñas</span>
                  ) : (
                    <>
                      {reviews.data && (
                        <ReviewStars
                          rating={
                            (reviews?.data?.count?.length > 0 &&
                              reviews?.data?.count[0]["_avg"]?.rating) ||
                            0
                          }
                        />
                      )}
                    </>
                  )}
                </div>

                <p className="text-2xl font-bold">
                  ${new Intl.NumberFormat().format(skuSelected?.price || 0)}
                </p>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" onClick={handleAddToCart}>
                    <span>
                      {(isLoadingMutate && "Agregando al carrito...") ||
                        "Agregar al carrito"}
                    </span>
                    <FaShoppingCart />
                  </Button>
                  <Button
                    onClick={handleClick}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Comprar al mayor
                    <img
                      src="/assets/icons8-whatsapp.svg"
                      className="w-5 h-5"
                    />
                  </Button>
                </div>

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
                        className={`bg-gray-100 text-sm capitalize px-4 py-2 rounded-lg  ${
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

            <RecomendacionProductos productId={id} />

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
                {isLoadingReviews ? (
                  <LoadingGrid />
                ) : (
                  <>
                    {reviews.data && (
                      <ProductReviews
                        id="1"
                        rating={
                          (reviews?.data?.count?.length > 0 &&
                            reviews?.data?.count[0]["_avg"]?.rating) ||
                          0
                        }
                        reviews={reviews.data?.reviews ?? []}
                      />
                    )}
                  </>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </>
      )}
    </DefaultTemplate>
  );
}

export default ProductPage;