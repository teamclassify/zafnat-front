import { SidebarProvider } from "../ui/sidebar";

{/*import useUser from "../../hooks/useUser";
import NotAuth from "../../pages/NotAuth";*/}
import Header from "../custom/Header";
import Sidebar from "../custom/Sidebar";

function AdminTemplate({ children }) {

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
      </SidebarProvider>
    </>
  );
}

export default AdminTemplate;
