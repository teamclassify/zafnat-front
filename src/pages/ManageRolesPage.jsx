import { useQuery } from "react-query";
import { LoadingGrid } from "../components/custom/Loading";
import { RolesGrid } from "../components/custom/RolesGrid";
import { Title } from "../components/custom/Title";
import AdminTemplate from "../components/templates/AdminTemplate";
import RolesService from "../services/api/RolesService";

export default function ManageRolePage() {
  const { data, isLoading, error } = useQuery("roles", async () => {
    return RolesService.getAll();
  });

  if (!isLoading && error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <AdminTemplate>
        <div>
          <Title title="Roles" />

          <div className="pt-3">
            {isLoading ? <LoadingGrid /> : <RolesGrid roles={data.data} />}
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
