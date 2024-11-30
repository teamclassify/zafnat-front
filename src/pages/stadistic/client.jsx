import { Title } from "../../components/custom/Title";
import AdminTemplate from "../../components/templates/AdminTemplate";
import CardProduct from "./components/CardProduct";
import Graphic from "./components/graphic";
import { graphicDataClient, cardDataClient } from "../../hooks/useDataGraphic";
import FilterDate from "./components/FilterDate";
import { useFilterContext } from "../../context/FilterStadisticContext";

export default function ClientStadistic() {
  const { filterDataByTimeRange } = useFilterContext();

  return (
    <AdminTemplate>
      <Title title="Estadísticas de clientes" />
      <div className="grid gap-5">
        <div>
          <div className="flex justify-end mb-4">
            <FilterDate />
          </div>
          <Graphic
            title={graphicDataClient[0].title}
            data={filterDataByTimeRange(graphicDataClient[0].data)}
            total={graphicDataClient[0].totalClient}
            value="clientes"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          {cardDataClient.map((card, index) => (
            <CardProduct
              key={index}
              title={card.title}
              progress={card.progress}
            />
          ))}
        </div>
      </div>
    </AdminTemplate>
  );
}
