import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "react-query";
import useCatalog from "../../hooks/useCatalog";
import AttributesService from "../../services/api/AttributesService";
import AccordionOption from "../custom/AccordionOptions";

function AccordionColors() {
  const { setColors } = useCatalog();

  const { data, isLoading } = useQuery("colors", () =>
    AttributesService.getAll({
      type: "color",
    })
  );

  if (isLoading) {
    return <Skeleton className="h-[125px] w-full rounded-xl mb-4" />;
  }

  const handleSelect = (option) => {
    setColors((prev) => {
      if (prev.includes(option)) {
        return prev.filter((color) => color !== option);
      }
      return [...prev, option];
    });
  };

  return (
    <>
      {data?.data && (
        <AccordionOption
          id="color"
          name="Color"
          options={data?.data}
          handleSelect={handleSelect}
        />
      )}
    </>
  );
}

export default AccordionColors;
