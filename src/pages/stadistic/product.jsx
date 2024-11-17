import { Title } from "../../components/custom/Title";
import AdminTemplate from "../../components/templates/AdminTemplate";
import CardProduct from "./components/CardProduct";
import Graphic from "./components/graphic";
import { graphicData, cardData } from "../../hooks/useDataGraphic";

export default function ProductStadistic() {
  return (
    <AdminTemplate>
      <Title title="Estadísticas de productos" />
      <div className="grid grid-cols-2 gap-5">
        {graphicData.map((graphic, index) => (
          <Graphic key={index} title={graphic.title} data={graphic.data} total={graphic.totalProducts}  value={"productos"}/>
        ))}
        {cardData.map((card, index) => (
          <CardProduct key={index} title={card.title} progress={card.progress} />
        ))}
      </div>
    </AdminTemplate>
  );
}
