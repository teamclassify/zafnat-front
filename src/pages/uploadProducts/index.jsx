import { Title } from "../../components/custom/Title";
import AdminTemplate from "../../components/templates/AdminTemplate";
import UploadFile from "./components/UploadFile";

export default function UploadCSV(){
  return (
    <AdminTemplate>
      <Title title="Subir productos"/>
      <UploadFile />
    </AdminTemplate>
  )
}