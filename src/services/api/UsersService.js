import axios from "axios";
import { URL, handleAxiosError } from ".";
import { getToken } from "./Auth";

async function getAll(filter) {
  const token = await getToken();

  const query = filter.join(",");

  console.log(query);

  try {
    const res = await axios({
      url: `${URL}/users`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params: {
        roles: query,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

const UsersService = {
  getAll,
};

export default UsersService;
