import {
  Accordion,
} from "@/components/ui/accordion";
import { useId } from "react";
import AccordionOption from "./AccordionOptions";

const category = ["Chaquetas", "Shorts", "Jeans"];
const size = ["8", "10", "12", "14", "16", "18"];
const color = ["Azul", "Negro", "Amarillo"];

export default function AccordionFilter() {
  const categoryID = useId();
  const colorID = useId();
  const sizeID = useId();

  const handleSelect = (name, isChecked) => {
    console.log(name, isChecked);
  };

  return (
    <Accordion type="single" className="w-2/4" collapsible>
      <AccordionOption id={categoryID} name="Category" options={category} handleSelect={handleSelect}/>
      <AccordionOption id={colorID} name="Color" options={color} handleSelect={handleSelect}/>
      <AccordionOption id={sizeID} name="Talla" options={size} handleSelect={handleSelect}/>
    </Accordion>
  );
}
