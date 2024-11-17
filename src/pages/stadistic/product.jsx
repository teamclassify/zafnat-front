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
        <CardProduct title={"Productos con mayores ganacias"} />
        <CardProduct title={"Productos más vendidos"} />
        <CardProduct title={"Productos menos vendidos"} />
        <CardProduct title={"Categorias con más ventas"} />
        <CardProduct title={"Categorías con menos ventas"} />
      </div>
    </AdminTemplate>
  );
}
