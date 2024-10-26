import { useQuery } from "react-query";
import UsersService from "../../services/api/UsersService";

function useUsers() {
  const { isLoading, data, isError } = useQuery(["users"], () =>
    UsersService.getAll()
  );

  return {
    isLoading,
    data,
    isError,
  };
}

export default useUsers;
