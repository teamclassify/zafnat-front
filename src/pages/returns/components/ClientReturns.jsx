import { CardReturn } from "./CardReturn";

export default function ClientReturns({ clients }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {clients.clients.map((client) => (
        <CardReturn
          key={client.id}
          client={client}
          status={client.status}
        />
      ))}
    </div>
  );
}
