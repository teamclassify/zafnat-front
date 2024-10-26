import { Route, Switch } from "wouter";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/users";

import { Toaster } from "@/components/ui/sonner";
import DashboardPage from "./pages/admin-page";
import SingInPage from "./pages/SignInPage";
import RecoverPassword from "./pages/RecoverPassword";
import RecoverCompleted from "./pages/RecoverCompleted";
import NewPassword from "./pages/NewPassword";


function App() {
  return (
    <>
      <Toaster />

      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={DashboardPage} path="/admin" />
        <Route component={UsersPage} path="/admin/ajustes/usuarios" />
        <Route component={SingInPage} path="/signin"/>
        <Route component={RecoverPassword} path="/recuperar"/>
        <Route component={RecoverCompleted} path="/recuperar_completado"/>
        <Route component={NewPassword} path="/nueva_contraseña"/>
        {/* Start Routes */}

        {/* End Routes */}

        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
