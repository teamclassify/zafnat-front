import { CardInfoClient } from "../../../components/custom/CardInfoClient";


export default function ClientComplaint({ client }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-4">
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
