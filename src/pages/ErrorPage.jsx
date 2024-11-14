import { MdNotInterested } from "react-icons/md";
import DefaultTemplate from "../components/templates/DefaultTemplate";

function ErrorPage() {
  return (
    <DefaultTemplate>
      <div className="text-center py-40">
        <MdNotInterested className="text-6xl mb-4 mx-auto" />
        <h2 className="text-6xl font-bold mb-4">404</h2>
        <p>La página que buscas no existe</p>
      </div>
    </DefaultTemplate>
  );
}

export default ErrorPage;
