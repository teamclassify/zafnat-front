import ReviewStars from "../../../components/catalog/ReviewStars";
import HeaderTab from "./HeaderTab";

function ReviewsTab() {
  const reviews = [
    {
      id: 1,
      productName: "Product 1",
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
      productName: "Product 2",
      author: "John Doe",
      date: "2021-08-01",
    },
  ];

  return (
    <div>
      <HeaderTab title="Reseñas" />

      {reviews.length > 0 ? (
        <div className="grid gap-2">
          {reviews.map((review) => (
            <div className="border p-4 rounded" key={review.id}>
              <header className="flex justify-between mb-4">
                <div className="flex gap-2">
                  <div>
                    <img
                      src="/assets/product.png"
                      className="w-full max-w-[100px]"
                    />
                  </div>

                  <div>
                    <p>{review.productName}</p>
                    <time className="text-xs text-zinc-400">{review.date}</time>
                    <p>{review.body}</p>
                  </div>
                </div>

                <ReviewStars rating={review.stars} />
              </header>
            </div>
          ))}
        </div>
      ) : (
        <p>No existen reseñas</p>
      )}
    </div>
  );
}

export default ReviewsTab;
