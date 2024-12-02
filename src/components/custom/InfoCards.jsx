import {
  graphicData,
  graphicDataClient,
  graphicDataSales,
} from "../../hooks/useDataGraphic";
import { Link } from "wouter";

// Función para calcular la diferencia porcentual respecto al mes pasado
function calculatePercentageChange(current, previous) {
  if (!previous) return "+0.00%";
  const change = ((current - previous) / previous) * 100;
  return `${change > 0 ? "+" : ""}${change.toFixed(2)}%`;
}

export default function InfoCards() {
  // Datos para las tarjetas
  const salesData = graphicDataSales.find(
    (item) => item.title === "Ventas totales"
  );
  const clientsData = graphicDataClient[0]; // Clientes totales
  const wishlistData = graphicData.find(
    (item) => item.title === "Productos agregados a lista de deseos"
  );

  // Cálculos dinámicos
  const salesPercentage = calculatePercentageChange(
    salesData.data[salesData.data.length - 1]?.ventas,
    salesData.data[salesData.data.length - 2]?.ventas
  );

  const clientsPercentage = calculatePercentageChange(
    clientsData.data[clientsData.data.length - 1]?.clientes,
    clientsData.data[clientsData.data.length - 2]?.clientes
  );

  const wishlistPercentage = calculatePercentageChange(
    wishlistData.data[wishlistData.data.length - 1]?.productos,
    wishlistData.data[wishlistData.data.length - 2]?.productos
  );

  // Renderización de las tarjetas
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <Link to="/admin/ventas/pedidos">
    <div className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow p-4 w-full">
      <h3 className="text-lg font-bold">Ventas totales</h3>
      <p className="text-2xl font-semibold">{salesData.total}</p>
      <p className="text-sm">{salesPercentage} respecto al mes pasado</p>
    </div>
  </Link>

  <Link to="/admin/reportes/clientes">
    <div className="bg-green-500 text-white rounded-lg shadow p-4 hover:bg-green-700 w-full">
      <h3 className="text-lg font-bold">Clientes totales</h3>
      <p className="text-2xl font-semibold">{clientsData.totalClient}</p>
      <p className="text-sm">{clientsPercentage} respecto al mes pasado</p>
    </div>
  </Link>

  <Link to="/admin/reportes/productos">
    <div className="bg-yellow-500 text-white rounded-lg shadow p-4 hover:bg-yellow-700 w-full">
      <h3 className="text-lg font-bold">Productos en lista de deseos</h3>
      <p className="text-2xl font-semibold">{wishlistData.totalProducts}</p>
      <p className="text-sm">{wishlistPercentage} respecto al mes pasado</p>
    </div>
  </Link>
</div>

  );
}
