import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { UserGrid } from "../components/custom/UserGrid";
import { useState } from "react";
import { PaginationDefault } from "../components/custom/Pagination";

const initialUsers = [
  { name: "Gianfranco", email: "gianfranco@gmail.com", rol: ["Administrador"] },
  { name: "William", email: "william@gmail.com", rol: ["Gerente"] },
  { name: "Haudi", email: "haudi@gmail.com", rol: ["Ventas", "Marketing"] },
  {
    name: "Maria Jose",
    email: "mariajose@gmail.com",
    rol: ["Marketing", "Ventas"],
  },
  { name: "Alessandro", email: "alessandro@gmail.com", rol: ["Administrador"] },
  { name: "Astroberto", email: "astroberto@gmail.com", rol: ["Almacen"] },
];

const roles = ["Gerente", "Administrador", "Ventas", "Almacen", "Marketing"];

export default function UserList() {
  const [users, setUsers] = useState(initialUsers);

  const handleDeleteUser = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
  };

  const handleRoleSelect = (newFilters) => {
    if (newFilters.length === 0) {
      setUsers(initialUsers);
    } else {
      const updatedUsers = initialUsers.filter((user) =>
        newFilters.every((selectedRole) => user.rol.includes(selectedRole))
      );
      setUsers(updatedUsers);
    }
  };

  return (
    <>
      <AdminTemplate>
        <div>
          <h3 className="scroll-m-20 pb-2 pt-6 text-2xl font-semibold tracking-tight first:mt-0 text-slate-700">
            Usuarios
          </h3>
          <div className="flex justify-between gap-2">
            <Input type="text" placeholder="Buscar" className="w-full" />
            <Filter options={roles} handleRoleSelect={handleRoleSelect} />
          </div>
          <div className="pt-10">
            <UserGrid users={users} handleDeleteUser={handleDeleteUser} />
          </div>
          <div className="pt-5">
            <PaginationDefault />
          </div>
        </div>
      </AdminTemplate>
    </>
  );
}
