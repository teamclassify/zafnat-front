
import { useState } from "react";

import SidebarClient from "../components/custom/SidebarClient";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import AddressTab from "./profile/components/AddressTab";
import ProfileTab from "./profile/components/ProfileTab";
import ReviewsTab from "./profile/components/ReviewsTab";
import WishListTab from "./profile/components/WishListTab";
import OrdersTab from "./profile/components/OrdersTab";
import ReturnsTab from "./profile/components/ReturnsTab";

function ReturnsPage() {
  const [page, setPage] = useState("devoluciones");

  return (
    <DefaultTemplate>
      
      <div className="grid md:grid-cols-[0.3fr,1fr] gap-8">
        <SidebarClient page={page} onChange={(value) => setPage(value)} />

        {page === "pedidos" && <OrdersTab />}
        {page === "perfil" && <ProfileTab />}
        {page === "direcciones" && <AddressTab />}
        {page === "reviews" && <ReviewsTab />}
        {page === "deseados" && <WishListTab />}
        {page === "devoluciones" && <ReturnsTab/>}
      </div>
    </DefaultTemplate>
  );
}

export default ReturnsPage;
