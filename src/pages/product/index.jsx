import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProductPreview from "../../components/catalog/ProductPreview";
import ProductReviews from "../../components/catalog/ProductReviews";
import ReviewStars from "../../components/catalog/ReviewStars";
import DefaultTemplate from "../../components/templates/DefaultTemplate";

function ProductPage() {
  return (
    <DefaultTemplate>
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
          <h1 className="text-4xl font-bold">Jean ochentero</h1>

          <div className="my-4">
            <ReviewStars rating={4} />
          </div>

          <p className="text-2xl font-bold">$80.000</p>

          <div className="my-4">
            <h3 className="text-lg font-bold mb-2">Talla</h3>

            <div className="flex gap-2">
              <button className="bg-gray-200 px-4 py-2 rounded-lg">S</button>
              <button className="bg-gray-200 px-4 py-2 rounded-lg">M</button>
              <button className="bg-gray-200 px-4 py-2 rounded-lg">L</button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Color</h3>

            <div className="flex gap-2">
              <button className="bg-red-400 px-4 py-2 rounded-lg w-10 h-10"></button>
              <button className="bg-green-400 px-4 py-2 rounded-lg w-10 h-10"></button>
              <button className="bg-gray-400 px-4 py-2 rounded-lg w-10 h-10"></button>
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

        <TabsContent value="description" className="p-4 text-sm text-zinc-600">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Déjate llevar por la nostalgia de los 80 con nuestros jeans de tiro
            alto. Su corte clásico y su tejido denim rígido con un ligero
            desteñido te proporcionarán un look auténtico y lleno de estilo. El
            talle alto realza tu figura y el ajuste ceñido te garantiza
            comodidad durante todo el día. Combínalos con una camiseta gráfica y
            unas zapatillas altas para un outfit casual y moderno.
          </p>
        </TabsContent>

        <TabsContent
          value="info"
          className="p-4 text-sm text-zinc-600"
        ></TabsContent>

        <TabsContent value="reviews" className="p-4 text-sm text-zinc-600">
          <ProductReviews id="1" />
        </TabsContent>
      </Tabs>
    </DefaultTemplate>
  );
}

export default ProductPage;
