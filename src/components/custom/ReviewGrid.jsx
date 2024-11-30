import { ReviewCard } from "../custom/ClientReviewCard"

export function ReviewGrid({ reviews }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          name={review.user.firstName + " " + (review.user.lastName || "")}
          date={review.createdAt}
          product={review.product}
          reviewTitle={""}
          reviewText={review.description}
          rating={review.rating}
        />
      ))}
    </div>
  );
}
