import { SidebarProvider } from "../ui/sidebar";

import useUser from "../../hooks/useUser";
import Header from "../custom/Header";
import Sidebar from "../custom/Sidebar";

function AdminTemplate({ children }) {
  const { loading } = useUser();

  // TODO: Implementar un loader
  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <SidebarProvider>
        <div className="max-w-[200px]">
          <Sidebar />
        </div>

        <main className="w-full">
          <Header />

          <div className="p-4">{children}</div>
        </main>
      </SidebarProvider>
    </>
  );
}

export default AdminTemplate;
