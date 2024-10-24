import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { useState } from "react";
import useUser from "../../hooks/useUser";

function LoginCard() {
  const { loginWithGoogle } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };
  return (
    <Card className="w-[70%] max-w-2xl px-10 py-5">
      <CardHeader>
        <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-row space-x-5 space-y-1.5 gap-5 items-center">
            <Label htmlFor="email">Correo</Label>
            <Input
              id="email"
              placeholder="Ejemplo@correo.com"
              autoComplete="email"
            />
          </div>
          <div className="flex flex-row gap-3 items-center justify-space-between">
            <Label htmlFor="passwd">Contraseña</Label>
            <Input
              id="passwd"
              placeholder="********"
              type={showPassword ? "text" : "password"} 
              autoComplete="current-password"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="showpasswd"
              checked={showPassword}
              onCheckedChange={toggleShowPassword}/>
              <label
                htmlFor="showpasswd"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mostrar Contraseña
              </label>
            </div>
            <Button variant="link">¿Olvidaste tu contraseña?</Button>
          </div>
          <div className="flex justify-between">
            <Button className="px-12">Ingresar</Button>
            <div className="flex gap-2">
              <Button variant="link" className="text-lg p-2">
                <FaFacebook className="text-2xl" />
              </Button>
              <Button
                variant="Link"
                onClick={loginWithGoogle}
                className="text-lg p-2"
              >
                <FcGoogle className="text-2xl" />
              </Button>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <label
              htmlFor="newuser"
              className="text-sm font-medium leading-none text-gray-400 mr-1"
            >
              ¿Eres nuevo?
            </label>
            <Button variant="link" className="p-0">
              Crea tu cuenta
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LoginCard;