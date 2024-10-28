import { useState } from "react";
import { initialRoles } from "../moks/roles.json";

const rolesDefault = [
  "Gerente",
  "Administrador",
  "Ventas",
  "Almacen",
  "Marketing",
];

export function useRoleFilter() {
  const [roles, setRoles] = useState(initialRoles);

  const handleRoleSelect = (newFilters) => {
    let selectedRole = newFilters[0];
    if (newFilters.length === 0) {
      setRoles(initialRoles);
    } else {
      const updatedUsers = initialRoles.filter((rol) => rol.role === selectedRole);
      console.log(updatedUsers)
      setRoles(updatedUsers);
    }
  };
  return { roles, handleRoleSelect, rolesDefault };
}
