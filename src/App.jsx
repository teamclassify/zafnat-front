import { Route, Switch } from "wouter";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserList from "./pages/InfoUserPage";
import InfoClient from "./pages/InfoClientPage";
import AlertStock from "./pages/AlertStockPage";
import ManageRole from "./pages/ManageRolesPage";
import { Toaster } from "@/components/ui/sonner";
import UsersPage from "./pages/users";
import DashboardPage from "./pages/admin-page";
import ProductCatalog from "./pages/ProductCatalog";

function App() {
  return (
    <>
      <Toaster />

      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={UserList} path="/admin/ajustes/usuarios"></Route>
        <Route component={InfoClient} path="/admin/clientes"></Route>
        <Route component={AlertStock} path="/admin/ajustes/inventario"></Route>
        <Route component={ManageRole} path="/admin/ajustes/roles"></Route>
        <Route component={ProductCatalog} path="/product-catalog"></Route>
        <Route component={DashboardPage} path="/admin" />
        <Route component={UsersPage} path="/admin/ajustes/usuarios" />
        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
