import { Button } from "../ui/button";
import ListOfProducts from "./ListOfProducts";

function NewProductsSection() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-2xl font-bold">Nuevas prendas</h2>
      </div>

      <ListOfProducts />

      <div className="flex justify-center mt-12">
        <Button variant="outline">Ver más</Button>
      </div>
    </section>
  );
}

export default NewProductsSection;
