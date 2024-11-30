import { CardInfoClient } from "./CardInfoClient";

export function ClientGrid({ clients }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {clients.map((user) => (
        <CardInfoClient
          key={user.id}
          name={user.firstName + " " + (user.lastName ?? "")}
          gender={user.gender}
          email={user.email}
          address={user?.addresses}
          products={[]}
        />
      ))}
    </div>
  );
}
