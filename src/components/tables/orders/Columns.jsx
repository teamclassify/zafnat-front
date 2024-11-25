import { Badge } from "@/components/ui/badge";
import { FaRegEye } from "react-icons/fa";
import ButtonReturn from "./ButtonReturn";

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
        <Badge className="bg-green-700">{row.getValue("status")}</Badge>
      ) : row.getValue("status") === "Pendiente" ? (
        <Badge className="bg-yellow-600">{row.getValue("status")}</Badge>
      ) : (
        <Badge className="bg-red-800">{row.getValue("status")}</Badge>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() =>
              alert(`Ver detalles del pedido ${row.getValue("id")}`)
            }
          >
            <FaRegEye />
          </button>

          <ButtonReturn id={row.getValue("id")} />
        </div>
      );
    },
  },
];

export const columnsWholeSale = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "cliente",
    header: "Cliente",
  },
  {
    accessorKey: "producto",
    header: "Producto",
  },
  {
    accessorKey: "cantidad",
    header: "Cantidad",
  },
  {
    accessorKey: "precio",
    header: "Precio",
  },
  {
    accessorKey: "precio_total",
    header: "Precio Total",
  },
  {
    accessorKey: "date",
    header: "Fecha",
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

export const columnsInvoices = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "cliente",
    header: "Cliente",
  },
  {
    accessorKey: "cantidad",
    header: "Cantidad",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      return row.getValue("status") === "Pagado" ? (
        <Badge className="bg-green-700">{"Pagado"}</Badge>
      ) : (
        <Badge className="bg-red-700">{"No Pago"}</Badge>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      return (
        <>
          <button
            className="btn btn-primary"
            onClick={() =>
              alert(`Ver detalles de la factura ${row.getValue("id")}`)
            }
          >
            <FaRegEye />
          </button>
        </>
      );
    },
  },
];
