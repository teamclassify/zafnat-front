import { Input } from "@/components/ui/input";

import Filter from "@/components/custom/Filter";
import { PaginationDefault } from "@/components/custom/Pagination";
import { UserGrid } from "@/components/custom/UserGrid";

import { LoadingGrid } from "@/components/custom/Loading";
import useUsers from "@/hooks/queries/useUsers";

const roles = ["Gerente", "Administrador", "Ventas", "Almacen", "Marketing"];

function ListOfUsers() {
  const { isLoading, data } = useUsers();

  const users = data?.data || [];


  const handleDeleteUser = () => {
    // const updatedUsers = users.filter((user) => user.email !== email);
    // setUsers(updatedUsers);
  };

  const handleRoleSelect = () => {
    // if (newFilters.length === 0) {
    //   setUsers(initialUsers);
    // } else {
    //   const updatedUsers = initialUsers.filter((user) =>
    //     newFilters.every((selectedRole) => user.rol.includes(selectedRole))
    //   );
    //   setUsers(updatedUsers);
    // }
  };

  if (isLoading) {
    return <LoadingGrid />;
  }

  return (
    <>
      <>
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
      </>
    </>
  );
}

export default ListOfUsers;
