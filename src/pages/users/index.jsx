import PageAdminHeader from "../../components/custom/PageAdminHeader";
import AdminTemplate from "../../components/templates/AdminTemplate";
import ListOfUsers from "./components/ListOfUsers";

export default function UsersPage() {
  return (
    <>
      <AdminTemplate>
        <div>
          <PageAdminHeader title="Usuarios" />

          <ListOfUsers />
        </div>
      </AdminTemplate>
    </>
  );
}
