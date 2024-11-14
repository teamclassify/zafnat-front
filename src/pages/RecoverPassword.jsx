import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

function RecoverPassword() {
  return (
    <DefaultTemplate>
      <div className="flex flex-col items-center justify-center p-12">
        <h1 className="text-3xl font-bold tracking-tight">
          Recuperación de la Contraseña
        </h1>
        <h3>De esta forma sabremos que cuenta te pertenece</h3>
        <div className="flex flex-col mt-12 items-center gap-2">
          <h3 className="font-bold">
            Introduce el correo electrónico de tu cuenta
          </h3>
          <Input type="email" placeholder="Email" autoComplete="email" />
          <Link to="/recuperar-completado">
            <Button type="submit" className="self-end">
              Continuar
            </Button>
          </Link>
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default RecoverPassword;
