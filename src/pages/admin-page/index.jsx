import PageAdminHeader from "@/components/custom/PageAdminHeader";
import AdminTemplate from "@/components/templates/AdminTemplate";
import Graphic from "../stadistic/components/graphic";
import FilterDate from "../stadistic/components/FilterDate";
import InfoCards from "../../components/custom/InfoCards";
import { useFilterContext } from "../../context/FilterStadisticContext";
import { graphicDataSales, graphicDataClient } from "../../hooks/useDataGraphic";

function DashboardPage() {
  const { timeRange, filterDataByTimeRange } = useFilterContext();

  return (
    <AdminTemplate>
      <div>
        <PageAdminHeader title="Dashboard" />
        <div className="mb-6">
          <InfoCards /> 
        </div>

        {/* Selector de rango de tiempo */}
        <div className="flex items-center justify-end gap-4 mb-6">
          <FilterDate />
        </div>

        {/* Gráficas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gráfica de Ventas */}
          <Graphic
            title={graphicDataSales[0].title}
            data={filterDataByTimeRange(graphicDataSales[0].data, timeRange)}
            total={graphicDataSales[0].total}
            value="ingresos"
          />
          {/* Gráfica de Clientes */}
          <Graphic
            title={graphicDataClient[0].title}
            data={filterDataByTimeRange(graphicDataClient[0].data, timeRange)}
            total={graphicDataClient[0].totalClient}
            value="clientes"
          />
        </div>
      </div>
    </AdminTemplate>
  );
}

export default DashboardPage;
