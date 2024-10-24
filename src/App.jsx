import { Route, Switch } from "wouter";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SingInPage from "./pages/SignInPage"

function App() {
  return (
    <>
      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={SingInPage} path="/signin"/>
        {/* Start Routes */}

        {/* End Routes */}
        
        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
