import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Modal from "../../../pages/categories/components/Modal";
import { GeneralModal } from "../../../pages/invoices/components/GeneralModal";
import DetailsEyesTable from "../../custom/DetailsEyesTable";
import ReturnsTableButton from "../../custom/ReturnsTableButton";

/**Columnas de Perfil Usuario */
export const columns = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "createdAt",
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
      return row.getValue("status") === "delivered" ? (
        <Badge className="bg-green-700">Entregado</Badge>
      ) : row.getValue("status") === "waiting_shipment" ? (
        <Badge className="bg-yellow-600">Esperando envio</Badge>
      ) : (
        <Badge className="bg-blue-800">{row.getValue("status")}</Badge>
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
    accessorKey: "createdAt",
    header: "Fecha",
  },
  {
    accessorKey: "user.firstName",
    header: "Cliente",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      return row.getValue("status") === "delivered" ? (
        <Badge className="bg-green-700">Entregado</Badge>
      ) : row.getValue("status") === "waiting_shipment" ? (
        <Badge className="bg-yellow-600">Esperando envio</Badge>
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
    accessorKey: "transaction_id",
    header: "Transacción",
  },
  {
    accessorKey: "order.user.firstName",
    header: "Cliente",
  },
  {
    accessorKey: "amount",
    header: "Precio",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      return row.getValue("status") === "paid" ? (
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
    accessorKey: "genero",
    header: "Genero",
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

//Columnas para el hsitorial de cambios
export const columnsHistory = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "usuario",
    header: "Usuario",
  },
  {
    accessorKey: "fecha",
    header: "Fecha de modificación",
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
