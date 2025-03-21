import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "react-query";
import useCatalog from "../../hooks/useCatalog";
import AttributesService from "../../services/api/AttributesService";
import AccordionOption from "../custom/AccordionOptions";

function AccordionSizes() {
  const { setSizes } = useCatalog();

  const { data, isLoading } = useQuery("sizes", () =>
    AttributesService.getAll({
      type: "size",
    })
  );

  if (isLoading) {
    return <Skeleton className="h-[125px] w-full rounded-xl" />;
  }

  const handleSelect = (option) => {
    setSizes((prev) => {
      if (prev.includes(option)) {
        return prev.filter((size) => size !== option);
      }
      return [...prev, option];
    });
  };

  return (
    <>
      {data?.data && (
        <AccordionOption
          id="size"
          name="Tamaño"
          options={data?.data}
          handleSelect={handleSelect}
        />
      )}
    </>
  );
}

export default AccordionSizes;
