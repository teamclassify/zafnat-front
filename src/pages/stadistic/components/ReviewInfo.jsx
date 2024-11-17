import { useReviews } from "../../../hooks/useReviews";

export default function ReviewInfo({ name, reviews }) {
  const { averageReview } = useReviews({ reviews });

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col justify-between">
        <p>{name}</p>
        <div className="flex flex-row gap-3">
          <p>⭐⭐⭐⭐⭐</p>
          <p>{averageReview.toFixed(1)}</p>
        </div>
      </div>
      <div className="pr-10">
        <p>{reviews.length}</p>
      </div>
    </div>
  );
}
