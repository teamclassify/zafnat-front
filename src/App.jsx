import { Route, Switch } from "wouter";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/users";

import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <Toaster />

      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={UsersPage} path="/admin/usuarios/roles"></Route>

        {/* Start Routes */}

        {/* End Routes */}

        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
