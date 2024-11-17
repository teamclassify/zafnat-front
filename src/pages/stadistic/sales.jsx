import { Title } from "../../components/custom/Title";
import AdminTemplate from "../../components/templates/AdminTemplate";
import Graphic from "./components/graphic";
import { graphicDataSales } from "../../hooks/useDataGraphic";

export default function SalesStadistic() {
  const value = ["ingresos", "ventas", "pedidos"];

  return (
    <AdminTemplate>
      <Title title="Estadísticas de ventas" />

      {/* Gráfica principal */}
      <div className="mb-5">
        <Graphic
          title={graphicDataSales[0].title}
          data={graphicDataSales[0].data}
          total={graphicDataSales[0].total}
          value={value[0]}
        />
      </div>

      {/* Gráficas pequeñas */}
      <div className="grid grid-cols-2 gap-5">
        {graphicDataSales.slice(1).map((graphic, index) => (
          <Graphic
            key={index}
            title={graphic.title}
            data={graphic.data}
            total={graphic.total}
            value={value[index + 1]}
          />
        ))}
      </div>
    </AdminTemplate>
  );
}
