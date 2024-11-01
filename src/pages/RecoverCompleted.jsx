import DefaultTemplate from "../components/templates/DefaultTemplate";
import { LuShieldCheck } from "react-icons/lu";
import { Button } from "@/components/ui/button";

function RecoverPassword() {
  return (
    <DefaultTemplate>
      <div className="flex items-center justify-center mt-20 flex-col gap-4">
        <LuShieldCheck size={100} />
        <h3 className="self-center text-center">Enviamos un correo a {/*Poner correo aqui y buscar como censurarlo*/} ex******@gmail.com. <br/> Ingresa y sigue las instrucciones para continuar con la recuperación de la contraseña</h3>
        <Button className="px-16">Ok</Button>
      </div>
    </DefaultTemplate>
  );
}

export default RecoverPassword;
