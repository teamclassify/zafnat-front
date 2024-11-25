import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Badge } from "@/components/ui/badge"
import { GeneralModal } from "../../../pages/invoices/components/GeneralModal";

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
      const [isOpen, setIsOpen] = useState(false);
      const [rowData, setRowData] = useState(null);

      const handleViewClick = () => {
        setRowData(row.original); // Guardamos los datos de la fila
        setIsOpen(true); // Abrimos el modal
      };

      return (
        <>
          <button className="btn btn-primary" onClick={handleViewClick}>
            <FaRegEye />
          </button>

          {/* Pasamos el estado del modal y los datos de la fila */}
          {isOpen && (
            <GeneralModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              data={rowData}
            />
          )}
        </>
      );
    },
  },
];

// Definición de columnas para la venta mayorista
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
      const [isOpen, setIsOpen] = useState(false);
      const [rowData, setRowData] = useState(null);

      const handleViewClick = () => {
        setRowData(row.original); // Guardamos los datos de la fila
        setIsOpen(true); // Abrimos el modal
      };

      return (
        <>
          <button className="btn btn-primary" onClick={handleViewClick}>
            <FaRegEye />
          </button>

          {/* Pasamos el estado del modal y los datos de la fila */}
          {isOpen && (
            <GeneralModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              data={rowData}
            />
          )}
        </>
      );
    },
  },
];

// Definición de columnas para las facturas
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
    accessorKey: "precio",
    header: "Precio",
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
      const [isOpen, setIsOpen] = useState(false);
      const [rowData, setRowData] = useState(null);

      const handleViewClick = () => {
        setRowData(row.original); // Guardamos los datos de la fila
        setIsOpen(true); // Abrimos el modal
      };

      return (
        <>
          <button className="btn btn-primary" onClick={handleViewClick}>
            <FaRegEye />
          </button>

          {/* Pasamos el estado del modal y los datos de la fila */}
          {isOpen && (
            <GeneralModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              data={rowData}
            />
          )}
        </>
      );
    },
  },
];