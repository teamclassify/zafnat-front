import { TbTruckReturn } from "react-icons/tb";
import { useLocation } from "wouter";

function ButtonReturn({ id }) {
  const [, setLocation] = useLocation();

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        setLocation(`/perfil/devoluciones/${id}`);
      }}
    >
      <TbTruckReturn />
    </button>
  );
}

export default ButtonReturn;
