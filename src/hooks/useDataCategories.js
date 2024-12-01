import { useQuery } from "react-query";
import CategoriesService from "../services/api/CategoriesService";


export const useDataCategories = () => {
  const { data, error, isLoading } = useQuery("categories", () =>
    CategoriesService.getAll({ status: true })
  );

  const dataCategories = data?.data.flatMap((category) => 
    category.categories?.map((subCategory) => ({
      id: subCategory.id.toString(),
      genero: category.name, 
      nombre: subCategory.name || "Sin nombre",
      descripción: subCategory.description || "Sin descripción", 
      estado: subCategory.id ? "Habilitado" : "Deshabilitado", 
    })) || []
  ) || [];

  return { dataCategories, error, isLoading };
};
