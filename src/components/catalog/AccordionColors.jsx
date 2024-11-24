import { useQuery } from "react-query";
import AttributesService from "../../services/api/AttributesService";
import AccordionOption from "../custom/AccordionOptions";
import { Loading } from "../custom/Loading";

function AccordionColors() {
  const { data, isLoading } = useQuery("colors", () =>
    AttributesService.getAll({
      type: "color",
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
