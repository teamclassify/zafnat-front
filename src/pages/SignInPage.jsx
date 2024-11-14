import { Link, useLocation } from "wouter";

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
  const { loginWithGoogle, registerWithEmail } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState(null);
  const [msgDescription, setMsgDescription] = useState(null);
  const [, setLocation] = useLocation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const res = await registerWithEmail(email, password);

    if (res.status === 200) {
      setMsg(null);
      setMsgDescription(null);
      setLocation("/login");
    } else {
      setMsg(res.msg || "Error al registrarse");
      setMsgDescription(res.error || "Intente nuevamente");
    }
  };

  return (
    <DefaultTemplate>
      <div className="flex items-center justify-center">
        <Card className="w-[70%] max-w-2xl px-10 py-5">
          <CardHeader>
            <CardTitle className="text-2xl">Registrarte</CardTitle>

            {msg && (
              <div className="bg-red-100 text-sm border-l-4 border-red-500 text-red-700 p-2 mt-4">
                <p className="font-bold">{msg}</p>
                <p>{msgDescription}</p>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp} className="grid w-full gap-4">
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
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="showpasswd"
                  checked={showPassword}
                  onCheckedChange={toggleShowPassword}
                />
                <label
                  htmlFor="showpasswd"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mostrar Contraseña
                </label>
              </div>

              <div className="flex justify-between">
                <Button className="px-12" type="submit">
                  Registrase
                </Button>
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
            </form>
          </CardContent>
        </Card>
      </div>
    </DefaultTemplate>
  );
}

export default SignInPage;
