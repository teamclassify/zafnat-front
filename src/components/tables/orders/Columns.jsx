import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import ButtonReturn from "./ButtonReturn";
import { Badge } from "@/components/ui/badge"
import { GeneralModal } from "../../../pages/invoices/components/GeneralModal";
import Modal from "../../../pages/categories/components/Modal";


export const columns = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => {
      return row.getValue("estado") === "Entregado" ? (
        <Badge className="bg-green-700">{row.getValue("estado")}</Badge>
      ) : row.getValue("estado") === "Pendiente" ? (
        <Badge className="bg-yellow-600">{row.getValue("estado")}</Badge>
      ) : (
        <Badge className="bg-red-800">{row.getValue("estado")}</Badge>
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

          {/* Pasamos el estado del modal y los datos de la fila */}
          {isOpen && (
            <GeneralModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              data={rowData}
            />
          )}
        </div>
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
    accessorKey: "fecha",
    header: "Fecha",
  },
  {
    accessorKey: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      {/**Aqui hay un error de useState */}
      const [isOpen, setIsOpen] = useState(false);
      const [rowData, setRowData] = useState(null);

      const handleViewClick = () => {
        setRowData(row.original); 
        setIsOpen(true); 
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
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => {
      return row.getValue("estado") === "Pagado" ? (
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

export const columnsCategories = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "descripción",
    header: "Descripción",
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => {
      return row.getValue("estado") === "Habilitado" ? (
        <Badge className="bg-green-700">{"Habilitado"}</Badge>
      ) : (
        <Badge className="bg-red-700">{"Deshabilitado"}</Badge>
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
            <Modal
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