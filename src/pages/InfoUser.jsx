import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { UserGrid } from "../components/custom/UserGrid";
import { useState } from "react";
import { PaginationDefault } from "../components/custom/Pagination";
import { initialUsers } from "../moks/users.json";

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
            <Filter options={roles} handleSelect={handleRoleSelect} />
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
