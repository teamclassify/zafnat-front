import PageAdminHeader from "@/components/custom/PageAdminHeader";
import AdminTemplate from "@/components/templates/AdminTemplate";

function DashboardPage() {
  return (
    <AdminTemplate>
      <div>
        <PageAdminHeader title="Dashboard" />
      </div>
    </AdminTemplate>
  );
}

export default DashboardPage;
