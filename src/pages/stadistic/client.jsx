import { Title } from "../../components/custom/Title";
import AdminTemplate from "../../components/templates/AdminTemplate";
import CardProduct from "./components/CardProduct";
import Graphic from "./components/graphic";
import { graphicData, cardData } from "../../hooks/useDataGraphic";

export default function ClientStadistic() {
  return (
    <AdminTemplate>
      <Title title="Estadísticas de clientes" />
      <div className="grid grid-cols-2 gap-5">
        {graphicData.map((graphic, index) => (
          <Graphic key={index} title={graphic.title} data={graphic.data} total={graphic.totalProducts}/>
        ))}
        {cardData.map((card, index) => (
          <CardProduct key={index} title={card.title} progress={card.progress} />
        ))}
      </div>
    </AdminTemplate>
  );
}
