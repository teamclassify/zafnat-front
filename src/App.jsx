import { Route, Switch } from "wouter";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SingInPage from "./pages/SignInPage";
import RecoverPassword from "./pages/RecoverPassword";
import RecoverCompleted from "./pages/RecoverCompleted";
import NewPassword from "./pages/NewPassword";
import CreateEditProduct from "./pages/CreateEditProduct";


function App() {
  return (
    <>
      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={SingInPage} path="/signup"/>
        <Route component={RecoverPassword} path="/recuperar"/>
        <Route component={RecoverCompleted} path="/recuperar-completado"/>
        <Route component={NewPassword} path="/contraseña-nueva"/>
        <Route component={CreateEditProduct} path="crear-editar-producto"/>
        {/* Start Routes */}

        {/* End Routes */}

        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
