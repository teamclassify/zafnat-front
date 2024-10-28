import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxDemo } from "./CheckBoxDemo";

export default function AccordionOption({ id, name, options, handleSelect }) {
  return (
    <AccordionItem value={`${id}-${name}`}>
      <AccordionTrigger>{name}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-3">
        {options.map((name, index) => (
          <CheckboxDemo
            key={`${id}-${index}`}
            name={name}
            onChange={handleSelect}
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
