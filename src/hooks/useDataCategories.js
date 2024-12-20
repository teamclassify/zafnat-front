import { useQuery } from "react-query";
import CategoriesService from "../services/api/CategoriesService";

export const useDataCategories = ({ filters }) => {
  const { data, isLoading, error } = useQuery(["categories", filters], () =>
    CategoriesService.getAll({ filters })
  );

  const dataCategories =
    data?.data.flatMap(
      (category) =>
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
