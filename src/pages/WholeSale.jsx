import Filter from "../components/custom/Filter";
import { PaginationDefault } from "../components/custom/Pagination";
import { Title } from "../components/custom/Title";
import { columnsWholeSale } from "../components/tables/orders/Columns";
import DataTable from "../components/tables/orders/DataTable";
import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "../components/ui/input";

export default function WholeSale(){ 
  const data = [
    {
      id: "001",
      cliente: "Juan Pérez",
      producto: "Jeans clásicos",
      cantidad: 10,
      precio: "$25.00",
      precio_total: "$250.00",
      date: "2023-11-01",
    },
    {
      id: "002",
      cliente: "María Gómez",
      producto: "Chaqueta de mezclilla",
      cantidad: 12,
      precio: "$45.00",
      precio_total: "$225.00",
      date: "2023-11-03",
    },
    {
      id: "003",
      cliente: "Carlos Ramírez",
      producto: "Camisa de algodón",
      cantidad: 12,
      precio: "$15.00",
      precio_total: "$180.00",
      date: "2023-11-05",
    },
    {
      id: "004",
      cliente: "Ana López",
      producto: "Shorts deportivos",
      cantidad: 20,
      precio: "$10.00",
      precio_total: "$200.00",
      date: "2023-11-07",
    },
    {
      id: "005",
      cliente: "Pedro Martínez",
      producto: "Vestido casual",
      cantidad: 8,
      precio: "$35.00",
      precio_total: "$280.00",
      date: "2023-11-09",
    },
    {
      id: "006",
      cliente: "Lucía Fernández",
      producto: "Falda de mezclilla",
      cantidad: 10,
      precio: "$20.00",
      precio_total: "$200.00",
      date: "2023-11-10",
    },
    {
      id: "007",
      cliente: "Roberto Herrera",
      producto: "Sudadera deportiva",
      cantidad: 6,
      precio: "$30.00",
      precio_total: "$180.00",
      date: "2023-11-11",
    },
    {
      id: "008",
      cliente: "Andrea Sánchez",
      producto: "Pantalón de vestir",
      cantidad: 15,
      precio: "$28.00",
      precio_total: "$420.00",
      date: "2023-11-12",
    },
    {
      id: "009",
      cliente: "Miguel Torres",
      producto: "Camisa formal",
      cantidad: 14,
      precio: "$22.00",
      precio_total: "$308.00",
      date: "2023-11-13",
    },
    {
      id: "010",
      cliente: "Sofía Rojas",
      producto: "Chaqueta acolchada",
      cantidad: 6,
      precio: "$55.00",
      precio_total: "$220.00",
      date: "2023-11-14",
    },
  ];
  
    
  
    return (
      <AdminTemplate>
        <main>
          <Title title="Compras al mayor" />
          <div className="flex flex-row justify-between">
            <Input />
            <Filter
              options={[
                "Fecha reciente",
                "Más antiguo",
                "Mayor compra",
                "Menor compra",
              ]}
            />
          </div>
          <div className="pt-3">
            <DataTable columns={columnsWholeSale} data={data} />
          </div>
          <PaginationDefault />
        </main>
      </AdminTemplate>
    );
  }