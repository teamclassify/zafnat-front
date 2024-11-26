import { ReviewCard } from "../custom/ClientReviewCard"

export function ReviewGrid({ reviews }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id} 
          name={review.name}
          date={review.date}
          product={review.product}
          reviewTitle={review.title}
          reviewText={review.description}
          rating={review.rating}
        />
      ))}
    </div>
  );
}
