import { CardInfoClient } from "./CardInfoClient";

export function ClientGrid({ client }) {

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {client.map((user) => (
        <CardInfoClient
          key={user.email}
          name={user.name}
          email={user.email}
          address={user.address}
          products={user.recentProducts}
        />
      ))}
    </div>
  );
}
