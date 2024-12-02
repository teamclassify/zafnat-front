import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useQuery } from "react-query";
import Filter from "../components/custom/Filter";
import { LoadingGrid } from "../components/custom/Loading";
import { PaginationDefault } from "../components/custom/Pagination";
import { ReviewGrid } from "../components/custom/ReviewGrid";
import { Title } from "../components/custom/Title";
import AdminTemplate from "../components/templates/AdminTemplate";
import ReviewsService from "../services/api/ReviewsService";

export default function ClientReviews() {
  const [filter, setFilter] = useState({});

  const options = [
    { name: "Mayor calificación", value: "highestRating" },
    { name: "Menor calificación", value: "lowestRating" },
    { name: "Más recientes", value: "mostRecent" },
    { name: "Más antiguos", value: "oldest" },
  ];

  const { data: reviews, isLoading: isLoadingReviews } = useQuery(
    ["reviews", filter],
    () => {
      return ReviewsService.getAllByUser(filter);
    }
  );

  const handleReviewSelect = (filter) => {
    const optionValue = options.find((option) => option.name === filter[0]);
    if (optionValue) setFilter(optionValue.value);
  };

  return (
    <AdminTemplate>
      <div>
        <Title title={"Reseñas de Clientes"} />
        <div className="flex justify-between gap-2">
          <Input
            type="text"
            placeholder="Buscar por nombre, producto, título..."
            className="w-full"
          />
          <Filter options={options} handleSelect={handleReviewSelect} />
        </div>
        <div className="pt-10">
          {isLoadingReviews ? (
            <div className="my-10">
              <LoadingGrid />
            </div>
          ) : (
            <>
              {reviews &&
              reviews?.data &&
              reviews?.data?.reviews?.length > 0 ? (
                <ReviewGrid reviews={reviews.data.reviews} />
              ) : (
                <div className="my-10">No hay reseñas</div>
              )}
            </>
          )}
        </div>
        <div className="pt-5">
          <PaginationDefault />
        </div>
      </div>
    </AdminTemplate>
  );
}
