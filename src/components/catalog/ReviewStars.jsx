import { IoStar, IoStarOutline } from "react-icons/io5";

function ReviewStars({ rating }) {
  return (
    <div className="flex gap-1 text-lg">
      {[...Array(5)].map((_, index) =>
        index < rating ? <IoStar key={index} className="text-yellow-500" /> : <IoStarOutline key={index} />
      )}
    </div>
  );
}

export default ReviewStars;
