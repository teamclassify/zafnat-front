import { Title } from "../../components/custom/Title";
import AdminTemplate from "../../components/templates/AdminTemplate";
import CardProduct from "./components/CardProduct";
import Graphic from "./components/graphic";

export default function ProductStadistic() {
  return (
    <AdminTemplate>
      <Title title="Estadisticas de productos" />
      <div className="grid grid-cols-2 gap-5">
        <Graphic title="Productos vendidos" />
        <Graphic title="Productos agregados a lista de deseos" />
        <CardProduct title={"Productos mejores valorados"} progress={false} />
        <CardProduct title={"Productos con mayores ganacias"} progress={true} />
        <CardProduct title={"Productos más vendidos"} progress={true} />
        <CardProduct title={"Productos menos vendidos"} progress={true} />
        <CardProduct title={"Categorias con más ventas"} progress={true} />
        <CardProduct title={"Categorías con menos ventas"} progress={true} />
      </div>
    </AdminTemplate>
  );
}
