import CardInfoComplaint from "./CardInfoComplaint";

export default function ClientComplaint({ client }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-4">
      {client
        .filter((user) => user.reviews && user.reviews.length > 0) 
        .map((user) =>
          user.reviews
            .filter((review) => review.rating < 3) 
            .map((review) => (
              <CardInfoComplaint
                key={`${user.email}-${review.product}`} 
                name={user.name}
                reviews={review}
              />
            ))
        )}
    </div>
  );
}
