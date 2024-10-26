import {
  Book,
  ChartBar,
  LayoutDashboard,
  Newspaper,
  Settings,
  User,
  UserRoundPen,
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
  },
  {
    title: "Catalogo",
    url: "/admin/catalogo",
    icon: Book,
  },
  {
    title: "Clientes",
    url: "/admin/clientes",
    icon: User,
  },
  {
    title: "Reportes",
    url: "/admin/reportes",
    icon: ChartBar,
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
