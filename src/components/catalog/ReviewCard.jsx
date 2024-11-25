import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ReviewStars from "./ReviewStars";

function ReviewCard({ review }) {
  return (
    <div className="border p-4 rounded">
      <header className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={review.user.photo ?? ""} />
            <AvatarFallback>{review.user.firstName}</AvatarFallback>
          </Avatar>

          <div>
            <p>{review.user.firstName}</p>
            <time className="text-xs text-zinc-400">{review.createdAt}</time>
          </div>
        </div>

        <ReviewStars rating={review.rating} />
      </header>

      <p>{review.description}</p>
    </div>
  );
}

export default ReviewCard;
