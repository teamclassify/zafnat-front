import { TbTruckReturn } from "react-icons/tb";
import { useLocation } from "wouter";
import { Button } from "../../ui/button";

function ButtonReturn({ id }) {
  const [, setLocation] = useLocation();

  return (
    <Button
      className="bg-red-600 hover:bg-red-800"
      onClick={() => {
        setLocation(`/perfil/devoluciones/${id}`);
      }}
    >
      <TbTruckReturn />
      Devolución
    </Button>
  );
}

export default ButtonReturn;
