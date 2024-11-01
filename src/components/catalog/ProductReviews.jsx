import ReviewCard from "./ReviewCard";
import ReviewStars from "./ReviewStars";

function ProductReviews({ id }) {
  const reviews = [
    {
      id: 1,
      title: "Great product",
      body: "I love this product, it's amazing",
      stars: 5,
      author: "Jane Doe",
      date: "2021-08-01",
    },
    {
      id: 2,
      title: "Not worth it",
      body: "I don't like this product, it's not worth the price",
      stars: 2,
      author: "John Doe",
      date: "2021-08-01",
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Product Reviews</h3>

      <div className="grid md:grid-cols-[300px,1fr] gap-8">
        <div>
          <div className="mb-4 grid gap-2">
            <p className="text-2xl font-bold">3.0</p>
            <ReviewStars rating={3} />
          </div>

          <div className="grid gap-2">
            <div>
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
            </div>
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
