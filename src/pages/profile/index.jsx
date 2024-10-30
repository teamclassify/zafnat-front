import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

import SidebarClient from "../../components/custom/SidebarClient";
import DefaultTemplate from "../../components/templates/DefaultTemplate";

function ProfilePage() {
  const [page, setPage] = useState("pedidos");

  return (
    <DefaultTemplate>
      <Breadcrumb className="mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/">Inicio</Link>
            </BreadcrumbLink>
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

        <div>{page}</div>
      </div>
    </DefaultTemplate>
  );
}

export default ProfilePage;
