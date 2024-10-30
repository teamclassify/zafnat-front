import { Route, Switch } from "wouter";

import { Toaster } from "@/components/ui/sonner";
import DashboardPage from "./pages/admin-page";
import AlertStock from "./pages/AlertStockPage";
import CreateEditProduct from "./pages/CreateEditProduct";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import InfoClient from "./pages/InfoClientPage";
import UserList from "./pages/InfoUserPage";
import LoginPage from "./pages/LoginPage";
import ManageRole from "./pages/ManageRolesPage";
import NewPassword from "./pages/NewPassword";
import ProductCatalog from "./pages/ProductCatalog";
import ProfilePage from "./pages/profile";
import RecoverCompleted from "./pages/RecoverCompleted";
import RecoverPassword from "./pages/RecoverPassword";
import SingInPage from "./pages/SignInPage";
import UsersPage from "./pages/users";

function App() {
  return (
    <>
      <Toaster />

      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={UserList} path="/admin/ajustes/usuarios" />
        <Route component={InfoClient} path="/admin/clientes" />
        <Route component={AlertStock} path="/admin/ajustes/inventario" />
        <Route component={ManageRole} path="/admin/ajustes/roles" />
        <Route component={ProductCatalog} path="/catalogo" />
        <Route component={DashboardPage} path="/admin" />
        <Route component={UsersPage} path="/admin/ajustes/usuarios" />
        <Route component={SingInPage} path="/signin" />
        <Route component={RecoverPassword} path="/recuperar" />
        <Route component={RecoverCompleted} path="/recuperar_completado" />
        <Route component={NewPassword} path="/nueva_contraseña" />
        <Route component={RecoverCompleted} path="/recuperar-completado" />
        <Route component={NewPassword} path="/contraseña-nueva" />
        <Route component={CreateEditProduct} path="crear-editar-producto" />
        <Route component={ProfilePage} path="/perfil" />
        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
