import { Route, Switch } from "wouter";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserList from "./pages/InfoUser";
import InfoClient from "./pages/InfoClient"

import { Toaster } from "@/components/ui/sonner"


function App() {
  return (
    <>
      <Toaster />
      
      <Switch>

        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={UserList} path="/admin/ajustes/usuarios"></Route>
        <Route component={InfoClient} path="/admin/clientes"></Route>

        {/* Start Routes */}

        {/* End Routes */}

        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
