import { Route, Switch } from "wouter";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/users";

import { Toaster } from "@/components/ui/sonner";
import DashboardPage from "./pages/admin-page";

function App() {
  return (
    <>
      <Toaster />

      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={DashboardPage} path="/admin" />
        <Route component={UsersPage} path="/admin/ajustes/usuarios" />

        {/* Start Routes */}

        {/* End Routes */}

        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </>
  );
}

export default App;
