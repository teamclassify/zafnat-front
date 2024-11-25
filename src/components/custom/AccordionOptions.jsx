import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxDemo } from "./CheckBoxDemo";

export default function AccordionOption({ id, name, options, handleSelect }) {
  return (
    <AccordionItem value={1}>
      <AccordionTrigger>{name}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-3">
        {options.map((option) => (
          <CheckboxDemo
            key={option.id}
            name={option.value}
            onChange={handleSelect}
            filter={name}
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
