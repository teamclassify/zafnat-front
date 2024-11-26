import { Route, Switch } from "wouter";

import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "./components/custom/ScrollToTop";
import AboutUsPage from "./pages/AboutUsPage";
import DashboardPage from "./pages/admin-page";
import AlertStock from "./pages/AlertStockPage";
import Cart from "./pages/Cart";
import Complaints from "./pages/complaints";
import Content from "./pages/Content";
import Delivery from "./pages/Delivery";
import EditProduct from "./pages/EditProduct";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import InfoClient from "./pages/InfoClientPage";
import UserList from "./pages/InfoUserPage";
import Invoices from "./pages/invoices";
import Location from "./pages/Location";
import LoginPage from "./pages/LoginPage";
import ManageRole from "./pages/ManageRolesPage";
import NewPassword from "./pages/NewPassword";
import NotAuthPage from "./pages/NotAuth";
import Orders from "./pages/Orders";
import Pay from "./pages/Pay";
import PaymentDone from "./pages/PaymentDone";
import ProductPage from "./pages/product";
import ProductCatalog from "./pages/ProductCatalog";
import ProfilePage from "./pages/profile";
import RecoverCompleted from "./pages/RecoverCompleted";
import RecoverPassword from "./pages/RecoverPassword";
import Returns from "./pages/returns";
import ReturnsPage from "./pages/ReturnsPage";
import Shipping from "./pages/Shipping";
import RegisterPage from "./pages/SignInPage";
import SocialMedia from "./pages/SocialMedia";
import ClientStadistic from "./pages/stadistic/client";
import ProductStadistic from "./pages/stadistic/product";
import SalesStadistic from "./pages/stadistic/sales";
import UploadCSV from "./pages/uploadProducts";
import Complaints from "./pages/complaints";
import Returns from "./pages/returns";
import Categories from "./pages/categories";
import ReturnsPage from "./pages/ReturnsPage";
import UsersPage from "./pages/users";
import WholeSale from "./pages/WholeSale";
import ClientsProducts from "./pages/ClientsProducts";
import ClientReviews from "./pages/ClientReviews";

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
        <Route component={ClientReviews} path="/admin/clientes/resenas" />
        <Route component={ManageRole} path="/admin/ajustes/roles" />
        <Route component={UserList} path="/admin/ajustes/usuarios" />
        <Route component={AlertStock} path="/admin/ajustes/inventario" />
        <Route component={ProductCatalog} path="/catalogo" />
        <Route component={ClientsProducts} path="/admin/catalogo/lista-productos" />
        <Route component={DashboardPage} path="/admin" />
        <Route component={UsersPage} path="/admin/ajustes/usuarios" />
        <Route component={RecoverPassword} path="/recuperar" />
        <Route component={RecoverCompleted} path="/recuperar-completado" />
        <Route component={NewPassword} path="/contraseña-nueva" />
        <Route component={EditProduct} path="/admin/producto/:id" />
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
        <Route component={Invoices} path="/admin/ventas/facturas" />
        <Route component={ProductStadistic} path="/admin/reportes/productos" />
        <Route component={ClientStadistic} path="/admin/reportes/clientes" />
        <Route component={SalesStadistic} path="/admin/reportes/ventas" />
        <Route component={ReturnsPage} path="/crear-devoluciones/:id" />
        <Route component={ProfilePage} path="/perfil/inicio" />
        <Route component={ProfilePage} path="/perfil/pedidos" />
        <Route component={ProfilePage} path="/perfil/direcciones" />
        <Route component={ProfilePage} path="/perfil/direcciones/nueva" />
        <Route component={ProfilePage} path="/perfil/devoluciones/:id" />
        <Route component={ProfilePage} path="/perfil/deseados" />
        <Route component={ProfilePage} path="/perfil/reviews" />
        <Route component={UploadCSV} path="/admin/catalogo/productos" />
        <Route component={Complaints} path="/admin/clientes/quejas" />
        <Route component={Returns} path="/admin/ventas/devoluciones" />
        <Route component={Categories} path="/admin/catalogo/categorias" />
        <Route component={ReturnsPage} path="/crear-devoluciones"/>
        <Route component={ProfilePage} path="/perfil" />
        <Route component={AboutUsPage} path="/acerca-de" />
        <Route component={NotAuthPage} path="/no-autorizado" />
        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
