import AdminTemplate from "../components/templates/AdminTemplate";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { ReviewGrid } from "../components/custom/ReviewGrid"; 
import { PaginationDefault } from "../components/custom/Pagination";
import { useReviewFilter } from "../hooks/useReviewFilter"; 
import { Title } from "../components/custom/Title";

export default function ClientReviews() {
  const { reviews, options, handleReviewSelect } = useReviewFilter();

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
          <ReviewGrid reviews={reviews} />
        </div>
        <div className="pt-5">
          <PaginationDefault />
        </div>
      </div>
    </AdminTemplate>
  );
}
