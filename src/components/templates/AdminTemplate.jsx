import { SidebarProvider } from "../ui/sidebar";
import { ToastContainer } from "react-toastify";
import useUser from "../../hooks/useUser";
import NotAuth from "../../pages/NotAuth";
import Header from "../custom/Header";
import Sidebar from "../custom/Sidebar";

function AdminTemplate({ children }) {
  const { user } = useUser();

  if (!user) {
    return <NotAuth />;
  }

  if (user.roles && !user.roles.includes("admin")) {
    return <NotAuth />;
  }

  return (
    <>
      <SidebarProvider>
        <div className="max-w-[200px]">
          <Sidebar />
        </div>

        <main className="w-full">
          <Header className="px-4" />

          <div className="p-4">{children}</div>
        </main>
        <ToastContainer position="top-right" autoClose={3000} />
      </SidebarProvider>
    </>
  );
}

export default AdminTemplate;
