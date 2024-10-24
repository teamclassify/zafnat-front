import { Route, Switch } from "wouter";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SingInPage from "./pages/SignInPage";
import RecoverPassword from "./pages/RecoverPassword";

function App() {
  return (
    <>
      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/signin" />
        <Route component={SingInPage} path="/signin"/>
        <Route component={RecoverPassword} path="/recuperar-contraseña"/>
        {/* Start Routes */}

        {/* End Routes */}

        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
