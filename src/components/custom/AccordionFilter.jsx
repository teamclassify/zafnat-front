import { Accordion } from "@/components/ui/accordion";
import { useId } from "react";
import { useAccordionFilter } from "../../hooks/useAccordionFilter";
import Categories from "../catalog/Categories";
import AccordionOption from "./AccordionOptions";

// const category = ["Chaquetas", "Shorts", "Jeans"];
const size = ["8", "10", "12", "14", "16", "18"];
const color = ["Azul", "Negro", "Amarillo"];

export default function AccordionFilter({ handleFilter }) {
  const { handleSelect } = useAccordionFilter({ handleFilter });

  // const categoryID = useId();
  const colorID = useId();
  const sizeID = useId();

  return (
    <Accordion type="single" defaultValue={1} className="w-full">
      {/**Esto se cambiara cuando itere sobre las categorias, mientras las dejo asi */}
      {/* <AccordionOption
        id={categoryID}
        name="Category"
        options={category}
        handleSelect={handleSelect}
      /> */}

      <Categories />

      <AccordionOption
        id={colorID}
        name="Color"
        options={color}
        handleSelect={handleSelect}
      />
      <AccordionOption
        id={sizeID}
        name="Talla"
        options={size}
        handleSelect={handleSelect}
      />
    </Accordion>
  );
}
