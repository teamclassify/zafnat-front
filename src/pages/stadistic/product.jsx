import { Title } from "../../components/custom/Title";
import AdminTemplate from "../../components/templates/AdminTemplate";
import Graphic from "./components/graphic";

export default function ProductStadistic(){
  return(
    <AdminTemplate>
      <Title title="Estadisticas de productos"/>
      <Graphic title="Productos vendidos"/>
    </AdminTemplate>
  )
}