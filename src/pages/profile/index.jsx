import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

import SidebarClient from "../../components/custom/SidebarClient";
import DefaultTemplate from "../../components/templates/DefaultTemplate";
import AddressTab from "./components/AddressTab";
import ProfileTab from "./components/ProfileTab";
import ReviewsTab from "./components/ReviewsTab";
import WishListTab from "./components/WishListTab";
import OrdersTab from "./components/OrdersTab";

function ProfilePage() {
  const [page, setPage] = useState("perfil");

  return (
    <DefaultTemplate>
      <Breadcrumb className="mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Inicio</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Perfil</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid md:grid-cols-[0.3fr,1fr] gap-8">
        <SidebarClient page={page} onChange={(value) => setPage(value)} />

        {page === "pedidos" && <OrdersTab />}
        {page === "perfil" && <ProfileTab />}
        {page === "direcciones" && <AddressTab />}
        {page === "reviews" && <ReviewsTab />}
        {page === "deseados" && <WishListTab />}
      </div>
    </DefaultTemplate>
  );
}

export default ProfilePage;
