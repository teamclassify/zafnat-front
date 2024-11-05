import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ReviewStars from "./ReviewStars";

function ReviewCard({ review }) {
  return (
    <div className="border p-4 rounded">
      <header className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngDLxVdX-4fhpWyG8hDPxUWyGV1B9uOXJ3Q&s" />
            <AvatarFallback>{review.author}</AvatarFallback>
          </Avatar>

          <div>
            <p>{review.author}</p>
            <time className="text-xs text-zinc-400">{review.date}</time>
          </div>
        </div>

        <ReviewStars rating={review.stars} />
      </header>

      <p>{review.body}</p>
    </div>
  );
}

export default ReviewCard;
