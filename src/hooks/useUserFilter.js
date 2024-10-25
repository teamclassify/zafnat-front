import { useState } from "react";
import { initialUsers } from "../moks/users.json";

export function useUserFilter() {
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
  return { users, handleDeleteUser, handleRoleSelect };
}
