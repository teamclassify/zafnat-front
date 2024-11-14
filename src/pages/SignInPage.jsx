import { Link } from "wouter";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import useUser from "../hooks/useUser";

function SignInPage() {
  const { loginWithGoogle } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <DefaultTemplate>
      <div className="py-20 flex items-center justify-center">
        <Card className="w-[70%] max-w-2xl px-10 py-5">
          <CardHeader>
            <CardTitle className="text-2xl">Registrarte</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full gap-4">
              <div className="flex flex-col  space-y-1.5 gap-1">
                <Label htmlFor="firstName">Primer Nombre*</Label>
                <Input id="name" placeholder="John" autoComplete="name" />
              </div>
              <div className="flex flex-col gap-1 justify-space-between">
                <Label htmlFor="lastName">Primer Apellido*</Label>
                <Input id="passwd" placeholder="Doe" autoComplete="LastName" />
              </div>
              <div className="flex flex-col  space-y-1.5 gap-1">
                <Label htmlFor="email">Correo*</Label>
                <Input
                  id="email"
                  placeholder="Ejemplo@correo.com"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col  space-y-1.5 gap-1">
                <Label htmlFor="passwd">Contraseña*</Label>
                <Input
                  id="passwd"
                  placeholder="********"
                  autoComplete="current-password"
                />
              </div>
              <div className="flex flex-col  space-y-1.5 gap-1">
                <Label htmlFor="passwd">Confirmar Contraseña*</Label>
                <Input
                  id="passwd"
                  placeholder="********"
                  autoComplete="current-password"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="showpasswd"
                    checked={showPassword}
                    onCheckedChange={toggleShowPassword}
                  />
                  <label
                    htmlFor="showpasswd"
                    className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Suscribirte para recibir noticias de nuevas colecciones
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <Button className="px-12">Registrase</Button>
                <div className="flex gap-2">
                  <Button
                    variant="Link"
                    onClick={loginWithGoogle}
                    className="text-4xl p-2s"
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
                  ¿Ya tienes una cuenta?
                </label>
                <Button variant="link" className="p-0">
                  <Link href="/login">Ingresa</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DefaultTemplate>
  );
}

export default SignInPage;
