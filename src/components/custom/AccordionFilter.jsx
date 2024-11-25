import { Accordion } from "@/components/ui/accordion";
import AccordionColors from "../catalog/AccordionColors";
import AccordionSizes from "../catalog/AccordionSizes";
import Categories from "../catalog/Categories";

export default function AccordionFilter() {
  return (
    <Accordion type="single" defaultValue={1} className="w-full">
      <Categories />
      <AccordionColors />
      <AccordionSizes />
    </Accordion>
  );
}
