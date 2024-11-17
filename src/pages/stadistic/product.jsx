import { Title } from "../../components/custom/Title";
import AdminTemplate from "../../components/templates/AdminTemplate";
import Graphic from "./components/graphic";

export default function ProductStadistic() {
  return (
    <AdminTemplate>
      <Title title="Estadisticas de productos" />
      <div className="grid grid-cols-2 gap-5">
        <Graphic title="Productos vendidos" />
        <Graphic title="Productos agregados a lista de deseos" />
        
      </div>
    </AdminTemplate>
  );
}
