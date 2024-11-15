import { FaLock } from "react-icons/fa";
import DefaultTemplate from "../components/templates/DefaultTemplate";

function NotAuth() {
  return (
    <DefaultTemplate>
      <div className="text-center py-40">
        <FaLock className="text-6xl mb-4 mx-auto" />
        <h2 className="text-6xl font-bold mb-4">403</h2>
        <p>No tienes permisos para ver esta página</p>
      </div>
    </DefaultTemplate>
  );
}

export default NotAuth;
