import { Accordion } from "@/components/ui/accordion";
import { useId, useState } from "react";
import AccordionOption from "./AccordionOptions";

const category = ["Chaquetas", "Shorts", "Jeans"];
const size = ["8", "10", "12", "14", "16", "18"];
const color = ["Azul", "Negro", "Amarillo"];

export default function AccordionFilter({ handleFilter }) {
  const [filterSelect, setFilterSelect] = useState({});

  const categoryID = useId();
  const colorID = useId();
  const sizeID = useId();

  const handleSelect = (name, categoryName) => {
    setFilterSelect((prevFilterSelect) => {
      const categoryItems = prevFilterSelect[categoryName]  ? prevFilterSelect[categoryName ] : [];
      const isItemSelected = categoryItems.includes(name);

      const updatedCategoryItems = isItemSelected
        ? categoryItems.filter((item) => item !== name)
        : [...categoryItems, name];

      const updatedFilterSelect = {
        ...prevFilterSelect,
        [categoryName]: updatedCategoryItems,
      };

      handleFilter(updatedFilterSelect)
      return updatedFilterSelect
    })
  };

  return (
    <Accordion type="single" defaultValue={1} className="w-2/4">
      <AccordionOption
        id={categoryID}
        name="Category"
        options={category}
        handleSelect={handleSelect}
      />
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
