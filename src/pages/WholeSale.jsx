import Filter from "../components/custom/Filter";
import { PaginationDefault } from "../components/custom/Pagination";
import { Title } from "../components/custom/Title";
import { columnsWholeSale } from "../components/tables/orders/Columns";
import DataTable from "../components/tables/orders/DataTable";
import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "../components/ui/input";

export default function WholeSale() {
  const data = [
    {
      id: 1,
      cliente: "Comercializadora ACME",
      producto: "Jean clásico",
      cantidad: 10,
      precio: "75.500",
      precio_total: "755.000",
      date: "2024-11-01",
    },
    {
      id: 2,
      cliente: "Distribuciones Gómez",
      producto: "Chaqueta de mezclilla",
      cantidad: 8,
      precio: "68.300",
      precio_total: "546.400",
      date: "2024-11-02",
    },
    {
      id: 3,
      cliente: "Moda y Estilo Ltda",
      producto: "Short de jean",
      cantidad: 12,
      precio: "79.200",
      precio_total: "950.400",
      date: "2024-11-03",
    },
    {
      id: 4,
      cliente: "Textiles del Norte",
      producto: "Jean ajustado",
      cantidad: 15,
      precio: "65.800",
      precio_total: "987.000",
      date: "2024-11-04",
    },
    {
      id: 5,
      cliente: "Boutique Primavera",
      producto: "Chaqueta con capucha",
      cantidad: 7,
      precio: "70.500",
      precio_total: "493.500",
      date: "2024-11-05",
    },
    {
      id: 6,
      cliente: "Almacenes Central",
      producto: "Short desgastado",
      cantidad: 20,
      precio: "80.000",
      precio_total: "1.600.000",
      date: "2024-11-06",
    },
    {
      id: 7,
      cliente: "Depósito Moda",
      producto: "Jean recto",
      cantidad: 9,
      precio: "62.700",
      precio_total: "564.300",
      date: "2024-11-07",
    },
    {
      id: 8,
      cliente: "Distribuidora Oriente",
      producto: "Chaqueta sin mangas",
      cantidad: 11,
      precio: "69.400",
      precio_total: "763.400",
      date: "2024-11-08",
    },
    {
      id: 9,
      cliente: "Almacén El Éxito",
      producto: "Jean rasgado",
      cantidad: 14,
      precio: "76.200",
      precio_total: "1.066.800",
      date: "2024-11-09",
    },
    {
      id: 10,
      cliente: "Fashion Market",
      producto: "Chaqueta bomber",
      cantidad: 16,
      precio: "71.500",
      precio_total: "1.144.000",
      date: "2024-11-10",
    },
  ];
  
  const options = [
    { name: "Fecha reciente" },
    { name: "Más antiguo" },
    { name: "Mayor compra" },
    { name: "Menor compra" },
  ];

  return (
    <AdminTemplate>
      <main>
        <Title title="Compras al mayor" />
        <div className="flex flex-row justify-between">
          <Input />
          <Filter
            options={options}
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
