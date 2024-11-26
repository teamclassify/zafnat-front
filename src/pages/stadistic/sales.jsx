import { Title } from "../../components/custom/Title";
import AdminTemplate from "../../components/templates/AdminTemplate";
import Graphic from "./components/graphic";
import { graphicDataSales } from "../../hooks/useDataGraphic";
import FilterDate from "./components/FilterDate";
import { useFilterContext } from "../../context/FilterStadisticContext";

export default function SalesStadistic() {
  const value = ["ingresos", "ventas", "pedidos"];
  const { filterDataByTimeRange } = useFilterContext();

  return (
    <AdminTemplate>
      <Title title="Estadísticas de ventas" />
      <div className="mb-5">
        <div className="flex justify-end mb-4">
          <FilterDate />
        </div>
        <Graphic
          title={graphicDataSales[0].title}
          data={filterDataByTimeRange(graphicDataSales[0].data)}
          total={graphicDataSales[0].total}
          value={value[0]}
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        {graphicDataSales.slice(1).map((graphic, index) => (
          <Graphic
            key={index}
            title={graphic.title}
            data={filterDataByTimeRange(graphic.data)}
            total={graphic.total}
            value={value[index + 1]}
          />
        ))}
      </div>
    </AdminTemplate>
  );
}
