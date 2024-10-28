import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxDemo } from "./CheckBoxDemo";

export default function AccordionFilter() {
  return (
    <Accordion type="single" className="w-2/4">
      <AccordionItem value="item-1">
        <AccordionTrigger>Categoria</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3">
          <CheckboxDemo name="Chaquetas" />
          <CheckboxDemo name="Short" />
          <CheckboxDemo name="Jeans" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger>Color</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3">
          <CheckboxDemo name="Azul" />
          <CheckboxDemo name="Negro" />
          <CheckboxDemo name="Amarillo" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger>Talla</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3">
          <CheckboxDemo name="6" />
          <CheckboxDemo name="8" />
          <CheckboxDemo name="10" />
          <CheckboxDemo name="12" />
          <CheckboxDemo name="14" />
          <CheckboxDemo name="16" />
          <CheckboxDemo name="18" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger>Modelo</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
