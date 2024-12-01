import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GeneralModal } from "../../../pages/invoices/components/GeneralModal";
import Modal from "../../../pages/categories/components/Modal";
import DetailsEyesTable from "../../custom/DetailsEyesTable";
import ReturnsTableButton from "../../custom/ReturnsTableButton";

/**Columnas de Perfil Usuario */
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
      ) : row.getValue("estado") === "Empaquetado" ? (
        <Badge className="bg-yellow-600">{row.getValue("estado")}</Badge>
      ) : (
        <Badge className="bg-blue-800">{row.getValue("estado")}</Badge>
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
          <div className="flex gap-3 items-center">
            <DetailsEyesTable handleViewClick={handleViewClick} />
            <ReturnsTableButton row={row} />
          </div>
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

/**Columnas de Pedidos Admin */
export const columnsAdmin = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
  },
  {
    accessorKey: "cliente",
    header: "Cliente",
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
      ) : row.getValue("estado") === "Empaquetado" ? (
        <Badge className="bg-yellow-600">{row.getValue("estado")}</Badge>
      ) : (
        <Badge className="bg-blue-800">{row.getValue("estado")}</Badge>
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
        setRowData(row.original); 
        setIsOpen(true); 
      };

      return (
        <>
          <div className="flex gap-3 items-center">
          <DetailsEyesTable handleViewClick={handleViewClick} />
          </div>
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

// Columnas para la venta mayorista
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
      {
        /**Aqui hay un error de useState */
      }
      const [isOpen, setIsOpen] = useState(false);
      const [rowData, setRowData] = useState(null);

      const handleViewClick = () => {
        setRowData(row.original);
        setIsOpen(true);
      };

      return (
        <>
          <DetailsEyesTable handleViewClick={handleViewClick} />
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

// Columnas para las facturas
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
        setRowData(row.original); 
        setIsOpen(true); 
      };

      return (
        <>
          <DetailsEyesTable handleViewClick={handleViewClick} />
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
        setRowData(row.original); 
        setIsOpen(true); 
      };

      return (
        <>
          <DetailsEyesTable handleViewClick={handleViewClick} />
          {isOpen && (
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={rowData} />
          )}
        </>
      );
    },
  },
];
