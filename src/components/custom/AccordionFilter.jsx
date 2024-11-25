import { Accordion } from "@/components/ui/accordion";
import { useId } from "react";
import { useAccordionFilter } from "../../hooks/useAccordionFilter";
import AccordionColors from "../catalog/AccordionColors";
import AccordionSizes from "../catalog/AccordionSizes";
import Categories from "../catalog/Categories";

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
      <AccordionColors />
      <AccordionSizes />
    </Accordion>
  );
}
