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

function App() {
  return (
    <>
      <Toaster />

      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={ProductPage} path="/producto/:id" />
        <Route component={UserList} path="/admin/ajustes/usuarios"></Route>
        <Route component={InfoClient} path="/admin/clientes"></Route>
        <Route component={AlertStock} path="/admin/ajustes/inventario"></Route>
        <Route component={ManageRole} path="/admin/ajustes/roles"></Route>
        <Route component={DashboardPage} path="/admin" />
        <Route component={UsersPage} path="/admin/ajustes/usuarios" />
        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
