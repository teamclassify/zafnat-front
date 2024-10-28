import Product from "../components/custom/Product";
import { Title } from "../components/custom/Title";
import AccordionFilter from "../components/custom/AccordionFilter";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Button } from "../components/ui/button";

export default function ProductCatalog() {
  return (
    <DefaultTemplate>
      <Title title="Productos"></Title>
      <div className="flex justify-between">
        <AccordionFilter />
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
            <Product
              image="./assets/example.jpg"
              name={"Jean Ochentero"}
              price="$85.000"
            />
            <Product
              image="./assets/example.jpg"
              name={"Jean Ochentero"}
              price="$85.000"
            />
            <Product
              image="./assets/example.jpg"
              name={"Jean Ochentero"}
              price="$85.000"
            />
            <Product
              image="./assets/example.jpg"
              name={"Jean Ochentero"}
              price="$85.000"
            />
            <Product
              image="./assets/example.jpg"
              name={"Jean Ochentero"}
              price="$85.000"
            />
            <Product
              image="./assets/example.jpg"
              name={"Jean Ochentero"}
              price="$85.000"
            />
            <Product
              image="./assets/example.jpg"
              name={"Jean Ochentero"}
              price="$85.000"
            />
            <Product
              image="./assets/example.jpg"
              name={"Jean Ochentero"}
              price="$85.000"
            />
          </div>
          <Button className="w-1/5">Ver más</Button>
        </div>
      </div>
    </DefaultTemplate>
  );
}
