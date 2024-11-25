import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "wouter";

import SidebarClient from "../../components/custom/SidebarClient";
import DefaultTemplate from "../../components/templates/DefaultTemplate";
import AddressTab from "./components/AddressTab";
import OrdersTab from "./components/OrdersTab";
import ProfileTab from "./components/ProfileTab";
import ReturnsTab from "./components/ReturnsTab";
import ReviewsTab from "./components/ReviewsTab";
import WishListTab from "./components/WishListTab";

function ProfilePage() {
  const [location] = useLocation();

  const params = useParams();
  const { id } = params;

  const [page, setPage] = useState("inicio");

  useEffect(() => {
    const page = location.split("/")[2];
    setPage(page);
  }, [location]);

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
        {page === "inicio" && <ProfileTab />}
        {page === "direcciones" && <AddressTab />}
        {page === "reviews" && <ReviewsTab />}
        {page === "deseados" && <WishListTab />}
        {page === "devoluciones" && <ReturnsTab productId={id} />}
      </div>
    </DefaultTemplate>
  );
}

export default ProfilePage;
