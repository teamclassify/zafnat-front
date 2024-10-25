import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { ClientGrid } from "../components/custom/ClientGrid";
import { PaginationDefault } from "../components/custom/Pagination";
import { useState } from "react";
import { initialClients } from "../moks/clients.json";

const options = [
  "Mayor compra",
  "Con productos recientes",
  "Sin productos recientes",
];

export default function InfoClient() {
  const [clients, setClients] = useState(initialClients);

  const handleClientSelect = (filter) => {
    const newFilters = filter[0];
    if (filter.length === 0) {
      setClients(initialClients);
    } else {
      let updatedClients = "";
      if (newFilters === options[0]) {
        updatedClients = initialClients.sort(
          (a, b) => b.recentProducts.length - a.recentProducts.length
        );
      }
      if (newFilters === options[1]) {
        updatedClients = initialClients.filter(
          (user) => user.recentProducts.length > 0
        );
      }
      if (newFilters === options[2]) {
        updatedClients = initialClients.filter(
          (user) => user.recentProducts.length === 0
        );
      }
      setClients(updatedClients === "" ? [] : updatedClients);
    }
  };

  return (
    <>
      <AdminTemplate>
        <div>
          <h3 className="scroll-m-20 pb-2 pt-6 text-2xl font-semibold tracking-tight first:mt-0 text-slate-700">
            Información clientes
          </h3>
          <div className="flex justify-between gap-2">
            <Input
              type="text"
              placeholder="Buscar por nombre, email, dirección, ciudad..."
              className="w-full"
            />
            <Filter options={options} handleSelect={handleClientSelect} />
          </div>
          <div className="pt-10">
            <ClientGrid client={clients} />
          </div>
          <div className="pt-5">
            <PaginationDefault />
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
