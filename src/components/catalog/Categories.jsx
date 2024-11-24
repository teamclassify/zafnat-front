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

import CategoriesService from "../../services/api/CategoriesService";
import { Loading } from "../custom/Loading";

const renderCheckboxItem = (icon, label, defaultChecked = false) => (
  <div className="flex items-center gap-2">
    {icon}
    <Checkbox defaultChecked={defaultChecked} /> {label}
  </div>
);

function Categories() {
  const { data, isLoading } = useQuery("categories", () =>
    CategoriesService.getAll()
  );

  if (isLoading) {
    return <Loading />;
  }

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
                    category.name
                  )}
                </AccordionTrigger>
                <AccordionContent className="pl-6">
                  {category.categories.map((subcategory) => (
                    <div key={subcategory.id}>
                      {renderCheckboxItem(
                        <FaFile className="text-gray-500" />,
                        subcategory.name
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
