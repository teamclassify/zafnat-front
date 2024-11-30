import { useState } from "react";
import { initialReviews } from "../moks/reviews.json"; 

const options = [
  { name: "Mayor calificación", value: "highestRating" },
  { name: "Menor calificación", value: "lowestRating" },
  { name: "Más recientes", value: "mostRecent" },
  { name: "Más antiguos", value: "oldest" },
  { name: "Con críticas negativas", value: "negativeReviews" }
];

export function useReviewFilter() {
  const [reviews, setReviews] = useState(initialReviews);

  const handleReviewSelect = (filter) => {
    const selectedFilter = filter[0]; 
    console.log("Filtro seleccionado:", selectedFilter);
  
    if (!selectedFilter) {
      setReviews(initialReviews);
      console.log("Restableciendo reseñas:", initialReviews);
      return;
    }
  
    let filteredReviews = [...initialReviews];
  
    switch (selectedFilter) {
      case "highestRating":
        filteredReviews.sort((a, b) => b.rating - a.rating);
        break;
  
      case "lowestRating":
        filteredReviews.sort((a, b) => a.rating - b.rating);
        break;
  
      case "mostRecent":
        filteredReviews.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
  
      case "oldest":
        filteredReviews.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
  
      case "negativeReviews":
        filteredReviews = filteredReviews.filter((review) => review.rating <= 2);
        break;
  
      default:
        break;
    }
  
    setReviews(filteredReviews);
    console.log("Reseñas finales actualizadas:", filteredReviews);
  };

  return { reviews, options, handleReviewSelect };
}
