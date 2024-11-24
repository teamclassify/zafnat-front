import { Route, Switch } from "wouter";

import { Toaster } from "@/components/ui/sonner";
import AboutUsPage from "./pages/AboutUsPage";
import DashboardPage from "./pages/admin-page";
import AlertStock from "./pages/AlertStockPage";
import Cart from "./pages/Cart";
import CreateEditProduct from "./pages/CreateEditProduct";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import InfoClient from "./pages/InfoClientPage";
import UserList from "./pages/InfoUserPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/SignInPage";
import ManageRole from "./pages/ManageRolesPage";
import NewPassword from "./pages/NewPassword";
import NotAuthPage from "./pages/NotAuth";
import ProductPage from "./pages/product";
import ProductCatalog from "./pages/ProductCatalog";
import ProfilePage from "./pages/profile";
import RecoverCompleted from "./pages/RecoverCompleted";
import RecoverPassword from "./pages/RecoverPassword";
import UsersPage from "./pages/users";
import Delivery from "./pages/Delivery";
import Location from "./pages/Location";
import Shipping from "./pages/Shipping";
import ScrollToTop from "./components/custom/ScrollToTop";
import Pay from "./pages/Pay";
import PaymentDone from "./pages/PaymentDone";
import Orders from "./pages/Orders";
import WholeSale from "./pages/WholeSale"
import SocialMedia from "./pages/SocialMedia"
import Content from "./pages/Content"
import Invoices from "./pages/invoices";
import ProductStadistic from "./pages/stadistic/product";
import ClientStadistic from "./pages/stadistic/client";
import SalesStadistic from "./pages/stadistic/sales";
import UploadCSV from "./pages/uploadProducts";
import Complaints from "./pages/complaints";

function App() {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/registrarse" />
        <Route component={ProductPage} path="/producto/:id" />
        <Route component={InfoClient} path="/admin/clientes/informacion" />
        <Route component={ManageRole} path="/admin/ajustes/roles" />
        <Route component={UserList} path="/admin/ajustes/usuarios" />
        <Route component={AlertStock} path="/admin/ajustes/inventario" />
        <Route component={ProductCatalog} path="/catalogo" />
        <Route component={DashboardPage} path="/admin" />
        <Route component={UsersPage} path="/admin/ajustes/usuarios" />
        <Route component={RecoverPassword} path="/recuperar" />
        <Route component={RecoverCompleted} path="/recuperar-completado" />
        <Route component={NewPassword} path="/contraseña-nueva" />
        <Route component={CreateEditProduct} path="crear-editar-producto" />
        <Route component={Cart} path="/carrito" />
        <Route component={Delivery} path="/entrega" />
        <Route component={Location} path="/direccion" />
        <Route component={Shipping} path="/envio" />
        <Route component={Pay} path="/pago" />
        <Route component={PaymentDone} path="/pago-realizado" />
        <Route component={Orders} path="/admin/ventas/pedidos" />
        <Route component={WholeSale} path="/admin/ventas/compras-al-mayor" />
        <Route component={SocialMedia} path="/admin/ajustes/redes-sociales" />
        <Route component={Content} path="/admin/ajustes/contenido" />
        <Route component={Invoices} path="/admin/ventas/facturas"/>
        <Route component={ProductStadistic} path="/admin/reportes/productos"/>
        <Route component={ClientStadistic} path="/admin/reportes/clientes"/>
        <Route component={SalesStadistic} path="/admin/reportes/ventas"/>
        <Route component={UploadCSV} path="/admin/catalogo/productos" />
        <Route component={Complaints} path="/admin/clientes/quejas" />
        <Route component={ProfilePage} path="/perfil" />
        <Route component={AboutUsPage} path="/acerca-de" />
        <Route component={NotAuthPage} path="/no-autorizado" />
        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
