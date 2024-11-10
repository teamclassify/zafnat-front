import { CardInfoUser } from "./CardInfoUser";

export function UserGrid({ users, roles }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {users.map((user) => (
        <CardInfoUser
          key={user.id}
          id={user.id}
          firstName={user.firstName}
          email={user.email}
          roles={user.roles}
          rolesOptions={roles}
        />
      ))}
    </div>
  );
}
