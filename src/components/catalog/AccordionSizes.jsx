import { useQuery } from "react-query";
import AttributesService from "../../services/api/AttributesService";
import AccordionOption from "../custom/AccordionOptions";
import { Loading } from "../custom/Loading";

function AccordionSizes() {
  const { data, isLoading } = useQuery("sizes", () =>
    AttributesService.getAll({
      type: "size",
    })
  );

  if (isLoading) {
    return <Loading />;
  }

  const handleSelect = (option) => {
    console.log(option);
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
