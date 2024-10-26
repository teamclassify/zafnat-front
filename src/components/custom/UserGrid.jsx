import { CardInfo } from "./CardInfo";

export function UserGrid({ users, handleDeleteUser }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {users.map((user) => (
        <CardInfo
          key={user.email}
          firstName={user.firstName}
          email={user.email}
          rol={""}
          handleDeleteUser={handleDeleteUser}
        />
      ))}
    </div>
  );
}
