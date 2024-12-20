import DefaultTemplate from "../components/templates/DefaultTemplate";
import { LuShieldCheck } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

function RecoverPassword() {
  return (
    <DefaultTemplate>
      <div className="flex items-center justify-center mt-20 flex-col gap-4">
        <LuShieldCheck size={100} />
        <h3 className="self-center text-center">
          Te enviamos un correo. <br /> Ingresa y sigue las instrucciones para
          continuar con la recuperación de la contraseña
        </h3>
        <Link to="/login">
          <Button className="px-16">Continuar</Button>
        </Link>
      </div>
    </DefaultTemplate>
  );
}

export default RecoverPassword;
