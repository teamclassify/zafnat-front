import ReviewCard from "./ReviewCard";
import ReviewStars from "./ReviewStars";

function ProductReviews({ rating, reviews }) {
  console.log(reviews);

  return (
    <div>
      <div className="grid md:grid-cols-[300px,1fr] gap-8">
        <div>
          <div className="mb-4 grid gap-2">
            <p className="text-2xl font-bold">
              {parseFloat(rating).toPrecision(2)}
            </p>
            <ReviewStars rating={rating} />
          </div>

          <div className="grid gap-2">
            {/* <div>
              <p>5 estrellas</p>
              <div className="bg-yellow-500 h-2 w-full"></div>
            </div>

            <div>
              <p>4 estrellas</p>
              <div className="bg-yellow-500 h-2 w-full"></div>
            </div>

            <div>
              <p>3 estrellas</p>
              <div className="bg-yellow-500 h-2 w-1/2"></div>
            </div>

            <div>
              <p>2 estrellas</p>
              <div className="bg-yellow-500 h-2 w-1/4"></div>
            </div>

            <div>
              <p>1 estrella</p>
              <div className="bg-yellow-500 h-2 w-1/8"></div>
            </div> */}
          </div>
        </div>

        {reviews.length > 0 ? (
          <div className="grid gap-2">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p>No existen reseñas</p>
        )}
      </div>
    </div>
  );
}

export default ProductReviews;
