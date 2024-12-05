import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
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

import { useStockAlerts } from "../../hooks/useStockAlerts";
import { NotificationsHistory } from "./NotificationsHistory";

function Header({ className } = { className: "" }) {
  const [location, setLocation] = useLocation();
  const { user, loading, logout, isAdmin } = useUser();

  const [notificationHistory, setNotificationHistory] = useState([]);
  const [pendingCount, setPendingCount] = useState(0); // Nuevo estado para el contador
  const { alerts } = useStockAlerts(15);

  useEffect(() => {
    const savedNotifications =
      JSON.parse(localStorage.getItem("notifications")) || [];
    setNotificationHistory(savedNotifications);
    setPendingCount(savedNotifications.length); // Cargar el contador inicial
  }, []);

  useEffect(() => {
    if (notificationHistory.length > 0) {
      localStorage.setItem(
        "notifications",
        JSON.stringify(notificationHistory)
      );
    }
  }, [notificationHistory]);

  useEffect(() => {
    // Agregar nuevas notificaciones
    if (alerts.length > 0) {
      alerts.forEach((alert) => {
        const newNotification = { message: `⚠️ Bajo stock: ${alert.name}` };
        setNotificationHistory((prev) => [...prev, newNotification]);
        setPendingCount((prev) => prev + 1); // Incrementar el contador de pendientes
      });
    }
  }, [alerts]);

  return (
    <header className="py-4 border-b">
      <div className={`flex items-center justify-between ${className}`}>
        <div className="flex gap-2 items-center w-full ">
          {!location.includes("admin") && <Logo />}

          <Input
            placeholder="Busca aqui..."
            className="max-w-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setLocation(`/catalogo?name=${e.target.value}`);
              }
            }}
          />
        </div>

        <div className="w-full flex justify-end gap-4 items-center">
          {user && user.roles.includes("admin") && (
            <NotificationsHistory
              history={notificationHistory}
              setHistory={setNotificationHistory}
              pendingCount={pendingCount} // Pasa el contador al componente
              setPendingCount={setPendingCount} // Para resetearlo
            />
          )}
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

                      <Link href="/perfil/inicio">
                        <DropdownMenuItem>Perfil</DropdownMenuItem>
                      </Link>

                      {isAdmin && (
                        <Link href="/admin">
                          <DropdownMenuItem>Administracion</DropdownMenuItem>
                        </Link>
                      )}

                      <Link href="/perfil/pedidos">
                        <DropdownMenuItem>Pedidos</DropdownMenuItem>
                      </Link>

                      <DropdownMenuItem onClick={logout}>
                        Cerrar sesion
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* <Button onClick={logout}>Logout</Button> */}
                </div>
              ) : (
                <div className="flex gap-4">
                  <Link href="/registrarse">Crea tu cuenta</Link>
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
