import { useEffect, useState } from "react";

export function useReviews({ reviews }) {
  const [averageReview, setAverageReview] = useState(0);

  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = reviews.reduce(
        (acc, product) => acc + product.rating,
        0
      );
      const average = totalRating / reviews.length;
      setAverageReview(average);
    } else {
      setAverageReview(0);
    }
  }, [reviews]);

  return { averageReview, reviews };
}
