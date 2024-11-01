import { Badge } from "@/components/ui/badge";
import { FaRegEye } from "react-icons/fa";

export const columns = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "date",
    header: "Fecha",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      return row.getValue("status") === "Entregado" ? (
        <Badge variant="outline">{row.getValue("status")}</Badge>
      ) : (
        <Badge variant="outline">{row.getValue("status")}</Badge>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      return (
        <button
          className="btn btn-primary"
          onClick={() => alert(`Ver detalles del pedido ${row.getValue("id")}`)}
        >
          <FaRegEye />
        </button>
      );
    },
  },
];
