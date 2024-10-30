import { ChevronRight } from "lucide-react";

function SidebarClient({ page, onChange }) {
  return (
    <div>
      <h3 className="">Mi cuenta</h3>

      <hr className="my-4" />

      <ul className="flex gap-2 flex-col text-gray-500">
        <li
          onClick={() => onChange("pedidos")}
          className={`flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded ${
            page === "pedidos" ? "bg-gray-100" : ""
          }`}
        >
          <span>Mis pedidos</span>
          <ChevronRight />
        </li>

        <li
          onClick={() => onChange("perfil")}
          className={`flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded ${
            page === "perfil" ? "bg-gray-100" : ""
          }`}
        >
          <span>Mi perfil</span>
          <ChevronRight />
        </li>

        <li
          onClick={() => onChange("direcciones")}
          className={`flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded ${
            page === "direcciones" ? "bg-gray-100" : ""
          }`}
        >
          <span>Mis direcciones</span>
          <ChevronRight />
        </li>

        <li
          onClick={() => onChange("deseados")}
          className={`flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded ${
            page === "deseados" ? "bg-gray-100" : ""
          }`}
        >
          <span>Lista de deseados</span>
          <ChevronRight />
        </li>

        <li
          onClick={() => onChange("reviews")}
          className={`flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded ${
            page === "reviews" ? "bg-gray-100" : ""
          }`}
        >
          <span>Reseñas</span>
          <ChevronRight />
        </li>
      </ul>
    </div>
  );
}

export default SidebarClient;
