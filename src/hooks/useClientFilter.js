import { useState } from "react";
import { initialClients } from "../moks/clients.json";

const options = [
  { name: "Mayor compra" },
  { name: "Menor compra" },
  { name: "Con productos recientes" },
  { name: "Sin productos recientes" },
];

export function useClientFilter() {
  const [clients, setClients] = useState(initialClients);

  const handleClientSelect = (filter) => {
    const newFilters = filter[0];
    if (filter.length === 0) {
      setClients(initialClients);
    } else {
      let updatedClients = "";
      if (newFilters === options[0]) {
        updatedClients = [...initialClients].sort(
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
      setClients(updatedClients);
    }
  };

  return { clients, options, handleClientSelect };
}
