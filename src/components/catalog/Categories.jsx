import { Skeleton } from "@/components/ui/skeleton";
import { FaFile, FaFolder } from "react-icons/fa";
import { useQuery } from "react-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

import useCatalog from "../../hooks/useCatalog";
import CategoriesService from "../../services/api/CategoriesService";

const renderCheckboxItem = (
  icon,
  label,
  defaultChecked = false,
  handleSelect
) => (
  <div className="flex items-center gap-2">
    {icon}
    <Checkbox
      defaultChecked={defaultChecked}
      onCheckedChange={() => handleSelect(label)}
    />
    {label}
  </div>
);

function Categories() {
  const { categories, setCategories } = useCatalog();

  const { data, isLoading } = useQuery("categories", () =>
    CategoriesService.getAll()
  );

  const handleSelect = (option) => {
    setCategories((prev) => {
      if (prev.includes(option)) {
        return prev.filter((category) => category !== option);
      }
      return [...prev, option];
    });
  };

  if (isLoading) {
    return <Skeleton className="h-[125px] w-full rounded-xl mb-4" />;
  }

  console.log(categories)

  return (
    <>
      <div className="p-0">
        <div className="pt-4 pb-2">
          <CardTitle className="text-1xl font-bold">Categorías</CardTitle>
        </div>

        <div>
          <Accordion type="single" collapsible>
            {data?.data?.map((category) => (
              <AccordionItem key={category.id} value={category.name}>
                <AccordionTrigger className="p-1 flex items-center gap-2">
                  {renderCheckboxItem(
                    <FaFolder className="text-gray-500" />,
                    category.name,
                    false,
                    handleSelect
                  )}
                </AccordionTrigger>
                <AccordionContent className="pl-6">
                  {category.categories.map((subcategory) => (
                    <div key={subcategory.id}>
                      {renderCheckboxItem(
                        <FaFile className="text-gray-500" />,
                        subcategory.name,
                        false,
                        handleSelect
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Categories;
