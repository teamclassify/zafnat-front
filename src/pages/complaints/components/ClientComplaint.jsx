import CardInfoComplaint from "./CardInfoComplaint";

export default function ClientComplaint({ client }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-4">
      {client
        .filter((user) => user.reviews && user.reviews.length > 0) // Filtrar usuarios con reviews
        .map((user) =>
          user.reviews
            .filter((review) => review.rating < 3) // Filtrar reviews con rating < 3 (quejas)
            .map((review) => (
              <CardInfoComplaint
                key={`${user.email}-${review.product}`} // Combina email y producto para evitar claves repetidas
                name={user.name}
                reviews={review}
              />
            ))
        )}
    </div>
  );
}
