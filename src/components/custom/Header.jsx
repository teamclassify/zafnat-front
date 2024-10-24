import { Link } from "wouter";

import { Skeleton } from "@/components/ui/skeleton";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";

import useUser from "../../hooks/useUser";
import Logo from "./Logo";

function Header() {
  const { user, loading, logout } = useUser();

  return (
    <header className="p-4 border-b">
      <div className="mx-auto max-w-screen-lg flex items-center justify-between">
        <div className="flex gap-2 items-center w-full ">
          <Logo />
          <Input placeholder="Busca aqui..." className="max-w-sm" />
        </div>

        <div className="w-full flex justify-end">
          {loading ? (
            <Skeleton className="w-[30px] h-[30px] rounded-full" />
          ) : (
            <>
              {user ? (
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage src={user?.photo} width={"30px"} />
                        <AvatarFallback>{user.firstName}</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Perfil</DropdownMenuItem>
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
