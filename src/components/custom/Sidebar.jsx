import {
  Book,
  ChartBar,
  LayoutDashboard,
  Newspaper,
  Settings,
  User,
  UserRoundPen,
  ShoppingBag, DollarSign, FileArchive, Truck, ScrollText, AlertTriangle, FileUser, MessageSquareDiff, Box, Grid2x2, Percent, MonitorSmartphone, Package, LinkIcon
} from "lucide-react";
import { Link, useLocation } from "wouter";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Logo from "./Logo.jsx";

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Ventas",
    url: "/admin/ventas",
    icon: Newspaper,
    submenu: [
      {
        title: "Pedidos",
        url: "/admin/ventas/pedidos",
        icon: ScrollText,
      },
      {
        title: "Mayoristas",
        url: "/admin/ventas/compras-al-mayor",
        icon: Percent,
      },
      {
        title: "Envios",
        url: "/admin/ventas/envios",
        icon: Truck,
      },
      {
        title: "Devoluciones",
        url: "/admin/ventas/devoluciones",
        icon: DollarSign,
      },
      {
        title: "Facturas",
        url: "/admin/ventas/facturas",
        icon: FileArchive,
      },
    ],
  },
  {
    title: "Catalogo",
    url: "/admin/catalogo",
    icon: Book,
    submenu: [
      {
        title: "Productos",
        url: "/admin/catalogo/productos",
        icon: Box,
      },
      {
        title: "Categorias",
        url: "/admin/catalogo/categorias",
        icon: Grid2x2,
      }
    ],
  },
  {
    title: "Clientes",
    url: "/admin/clientes",
    icon: User,
    submenu: [
      {
        title: "Informacion",
        url: "/admin/clientes/informacion",
        icon: FileUser,
      },
      {
        title: "Reseñas",
        url: "/admin/clientes/resenas",
        icon: MessageSquareDiff,
      },
      {
        title: "Quejas",
        url: "/admin/clientes/quejas",
        icon: AlertTriangle,
      }
    ],
  },
  {
    title: "Reportes",
    url: "/admin/reportes",
    icon: ChartBar,
    submenu: [
      {
        title: "Ventas",
        url: "/admin/reportes/ventas",
        icon: DollarSign,
      },
      {
        title: "Clientes",
        url: "/admin/reportes/clientes",
        icon: User,
      },
      {
        title: "Productos",
        url: "/admin/reportes/productos",
        icon: ShoppingBag,
      },
    ],
  },
  {
    title: "Ajustes",
    url: "",
    icon: Settings,
    submenu: [
      {
        title: "Usuarios",
        url: "/admin/ajustes/usuarios",
        icon: User,
      },
      {
        title: "Roles",
        url: "/admin/ajustes/roles",
        icon: UserRoundPen,
      },
      {
        title: "Redes Sociales",
        url: "/admin/ajustes/redes-sociales",
        icon: MonitorSmartphone,
      },
      {
        title: "Inventario",
        url: "/admin/ajustes/inventario",
        icon: Package,
      },
      {
        title: "Contenido",
        url: "/admin/ajustes/contenido",
        icon: LinkIcon,
      },
    ],
  },
];

export default function Sidebar() {
  const [location] = useLocation();
  
  return (
    <SidebarComponent className="max-w-[200px]">
      <SidebarContent className="p-2">
        <SidebarGroup className="flex justify-center">
          <Logo />
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.submenu?.length > 0 ? (
                  <Collapsible key={item.title} className="w-full">
                    <CollapsibleTrigger className="w-full">
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <p>
                            <item.icon />
                            <span>{item.title}</span>
                          </p>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="pl-4">
                      {item.submenu.map((subitem) => (
                        <SidebarMenuItem
                          key={subitem.title}
                          className={subitem.url === location ? "font-bold" : ""}
                        >
                          <SidebarMenuButton asChild>
                            <Link href={subitem.url}>
                              <subitem.icon />
                              <span>{subitem.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
}
