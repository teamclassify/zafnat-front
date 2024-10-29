import { Accordion } from "@/components/ui/accordion";
import { useId, useState } from "react";
import AccordionOption from "./AccordionOptions";

const category = ["Chaquetas", "Shorts", "Jeans"];
const size = ["8", "10", "12", "14", "16", "18"];
const color = ["Azul", "Negro", "Amarillo"];

export default function AccordionFilter({ handleFilter }) {
  const [filterSelect, setFilterSelect] = useState({
    
  });

  const categoryID = useId();
  const colorID = useId();
  const sizeID = useId();

  const handleSelect = (name, categoryName) => {
    setFilterSelect((prevFilterSelect) => {
      // Verificar si el elemento ya está en la categoría
      const categoryItems = prevFilterSelect[categoryName] || [];
      const isItemSelected = categoryItems.includes(name);
  
      // Si ya está seleccionado, lo quitamos; si no, lo agregamos
      const updatedCategoryItems = isItemSelected
        ? categoryItems.filter((item) => item !== name) // Elimina el elemento
        : [...categoryItems, name]; // Agrega el elemento
  
      // Crear el nuevo objeto filterSelect con el cambio aplicado
      const updatedFilterSelect = {
        ...prevFilterSelect,
        [categoryName]: updatedCategoryItems,
      };
  
      // Si la categoría queda vacía después de quitar el elemento, la eliminamos
      if (updatedCategoryItems.length === 0) {
        delete updatedFilterSelect[categoryName];
      }
  
      // Llamar a otro método con el estado actualizado (opcional)
      setFilterSelect(updatedFilterSelect);
      handleFilter(updatedFilterSelect)
  
      // Retornar el nuevo estado para actualizar filterSelect
      return updatedFilterSelect;
    });

    }

  return (
    <Accordion type="single" className="w-2/4" collapsible>
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
