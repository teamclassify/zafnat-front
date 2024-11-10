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
import ProductPage from "./pages/product";
import ProductCatalog from "./pages/ProductCatalog";
import ProfilePage from "./pages/profile";
import RecoverCompleted from "./pages/RecoverCompleted";
import RecoverPassword from "./pages/RecoverPassword";
import UsersPage from "./pages/users";
import AboutUsPage from "./pages/AboutUsPage";
import Cart from "./pages/Cart";
import Delivery from "./pages/Delivery";
import Location from "./pages/Location";
import Shipping from "./pages/Shipping"

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
        <Route component={RecoverPassword} path="/recuperar" />
        <Route component={RecoverCompleted} path="/recuperar_completado" />
        <Route component={NewPassword} path="/contraseña-nueva" />
        <Route component={CreateEditProduct} path="crear-editar-producto" />
        <Route component={Cart} path="/carrito" />
        <Route component={Delivery} path="/entrega" />
        <Route component={Location} path="/direccion" />
        <Route component={Shipping} path="/envio" />
        <Route component={ProfilePage} path="/perfil" />
        <Route component={AboutUsPage} path="/acerca-de" />
        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
