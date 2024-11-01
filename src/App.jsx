import { Route, Switch } from "wouter";

import { Toaster } from "@/components/ui/sonner";
import DashboardPage from "./pages/admin-page";
import AlertStock from "./pages/AlertStockPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import InfoClient from "./pages/InfoClientPage";
import UserList from "./pages/InfoUserPage";
import LoginPage from "./pages/LoginPage";
import ManageRole from "./pages/ManageRolesPage";
import ProductPage from "./pages/product";
import UsersPage from "./pages/users";
import DashboardPage from "./pages/admin-page";
import SingInPage from "./pages/SignInPage";
import RecoverPassword from "./pages/RecoverPassword";
import RecoverCompleted from "./pages/RecoverCompleted";
import NewPassword from "./pages/NewPassword";
import CreateEditProduct from "./pages/CreateEditProduct";
import ProductCatalog from "./pages/ProductCatalog";

function App() {
  return (
    <>
      <Toaster />

      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={ProductPage} path="/producto/:id" />
        <Route component={InfoClient} path="/admin/clientes" />
        <Route component={ManageRole} path="/admin/ajustes/roles" />
        <Route component={UserList} path="/admin/ajustes/usuarios" />
        <Route component={AlertStock} path="/admin/ajustes/inventario" />
        <Route component={ProductCatalog} path="/catalogo" />
        <Route component={DashboardPage} path="/admin" />
        <Route component={UsersPage} path="/admin/ajustes/usuarios" />
        <Route component={RecoverPassword} path="/recuperar"/>
        <Route component={RecoverCompleted} path="/recuperar_completado"/>
        <Route component={NewPassword} path="/contraseña-nueva"/>
        <Route component={CreateEditProduct} path="crear-editar-producto"/>
        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
