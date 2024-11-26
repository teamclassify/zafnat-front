import { IoAddCircleOutline } from "react-icons/io5";
import { Button } from "../../../components/ui/button";

export default function AddButton() {
  return (
    <Button variant={"outline"}>
      <IoAddCircleOutline />
      Agregar categoria
    </Button>
  );
}
