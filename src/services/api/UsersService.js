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

async function update(firstName, lastName, gender, phone) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/users/update-profile`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        firstName,
        lastName,
        gender,
        phone,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

const UsersService = {
  getAll,
  update,
};

export default UsersService;
