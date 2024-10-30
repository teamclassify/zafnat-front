import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function RecoverPassword() {
  return (
    <DefaultTemplate>
      <div className="flex items-center justify-center mt-20 flex-col w-full">
        <h1 className="text-3xl font-bold tracking-tight mb-6">
          Recuperación de la Contraseña
        </h1>
        <div className="flex flex-col gap-4 w-[400px]">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Nueva Contraseña *</label>
            <Input
              type="password"
              placeholder="Contraseña"
              className="w-full"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Confirmar Contraseña *</label>
            <Input
              type="password"
              placeholder="Confirmar Contraseña"
              className="w-full"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="mt-4 bg-gray-900 text-white">
              Cambiar contraseña
            </Button>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default RecoverPassword;
