import {
  Book,
  ChartBar,
  LayoutDashboard,
  Newspaper,
  Settings,
  User,
} from "lucide-react";

import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "wouter";

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
    url: "/admin/ajustes",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <SidebarComponent>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
}
