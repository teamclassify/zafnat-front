import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { useLocation } from "wouter";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { resetPassword } from "../services/firebase/AuthService";

function RecoverPassword() {
  const [, setLocation] = useLocation();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.length > 0) {
      const data = await resetPassword(email);

      if (data.status === 200) {
        toast.success("Correo enviado correctamente");
        setLocation("/recuperar-completado");
      } else {
        toast.error(data.error);
      }
    }
  };

  return (
    <DefaultTemplate>
      <div className="flex flex-col items-center justify-center p-12">
        <h1 className="text-3xl font-bold tracking-tight">
          Recuperación de la Contraseña
        </h1>
        <h3>De esta forma sabremos que cuenta te pertenece</h3>
        <form
          className="flex flex-col mt-12 items-center gap-2"
          onSubmit={handleSubmit}
        >
          <h3 className="font-bold">
            Introduce el correo electrónico de tu cuenta
          </h3>
          <Input
            type="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <Link to="/recuperar-completado"> */}
          <Button type="submit" className="self-end">
            Continuar
          </Button>
          {/* </Link> */}
        </form>
      </div>
    </DefaultTemplate>
  );
}

export default RecoverPassword;
