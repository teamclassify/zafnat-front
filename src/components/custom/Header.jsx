import { Link, useLocation } from "wouter";

import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";

import { ShoppingCart } from "lucide-react";
import useUser from "../../hooks/useUser";
import Logo from "../custom/Logo";

function Header({ className } = { className: "" }) {
  const [location] = useLocation();

  const { user, loading, logout } = useUser();

  return (
    <header className="py-4 border-b">
      <div className={`flex items-center justify-between ${className}`}>
        <div className="flex gap-2 items-center w-full ">
          {!location.includes("admin") && <Logo />}

          <Input placeholder="Busca aqui..." className="max-w-sm" />
        </div>

        <div className="w-full flex justify-end gap-4 items-center">
          <Link href="/carrito">
            <ShoppingCart size={24} />
          </Link>

          {loading ? (
            <Skeleton className="w-[30px] h-[30px] rounded-full" />
          ) : (
            <>
              {user ? (
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar className="h-[30px] mt-1 p-0 w-[30px]">
                        <AvatarImage src={user?.photo} />
                        <AvatarFallback>{user.firstName}</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                      <DropdownMenuSeparator />

                      <Link href="/perfil">
                        <DropdownMenuItem>Perfil</DropdownMenuItem>
                      </Link>

                      <DropdownMenuItem>Pedidos</DropdownMenuItem>
                      <DropdownMenuItem onClick={logout}>
                        Cerrar sesion
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* <Button onClick={logout}>Logout</Button> */}
                </div>
              ) : (
                <div className="flex gap-4">
                  <Link href="/signup">Crea tu cuenta</Link>
                  <Link href="/login">Ingresa</Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
