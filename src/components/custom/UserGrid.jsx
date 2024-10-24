import { CardInfo } from "./CardInfo";

export function UserGrid({ users, handleDeleteUser }) {

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {users.map((user) => (
        <CardInfo
          key={user.email}
          name={user.name}
          email={user.email}
          rol={user.rol}
          handleDeleteUser={handleDeleteUser}
        />
      ))}
    </div>
  );
}
