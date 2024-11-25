import { ChevronRight } from "lucide-react";
import { useLocation } from "wouter";

function SidebarClient({ page, onChange }) {
  const [, setLocation] = useLocation();

  return (
    <div>
      <h3 className="">Mi cuenta</h3>

      <hr className="my-4" />

      <ul className="flex gap-2 flex-col text-gray-500">
        <li
          onClick={() => setLocation("/perfil/inicio")}
          className={`flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded ${
            page === "inicio" ? "bg-gray-100" : ""
          }`}
        >
          <span>Mi perfil</span>
          <ChevronRight />
        </li>

        <li
          onClick={() => setLocation("/perfil/pedidos")}
          className={`flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded ${
            page === "pedidos" ? "bg-gray-100" : ""
          }`}
        >
          <span>Mis pedidos</span>
          <ChevronRight />
        </li>

        <li
          onClick={() => setLocation("/perfil/direcciones")}
          className={`flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded ${
            page === "direcciones" ? "bg-gray-100" : ""
          }`}
        >
          <span>Mis direcciones</span>
          <ChevronRight />
        </li>

        <li
          onClick={() => setLocation("/perfil/deseados")}
          className={`flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded ${
            page === "deseados" ? "bg-gray-100" : ""
          }`}
        >
          <span>Lista de deseados</span>
          <ChevronRight />
        </li>

        <li
          onClick={() => setLocation("/perfil/reviews")}
          className={`flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded ${
            page === "reviews" ? "bg-gray-100" : ""
          }`}
        >
          <span>Reseñas</span>
          <ChevronRight />
        </li>

        {/* <li
          onClick={() => setLocation("/perfil/devoluciones")}
          className={`flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded ${
            page === "devoluciones" ? "bg-gray-100" : ""
          }`}
        >
          <span>Devoluciones</span>
          <ChevronRight />
        </li> */}
      </ul>
    </div>
  );
}

export default SidebarClient;
