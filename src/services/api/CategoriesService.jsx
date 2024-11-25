import axios from "axios";
import { URL, handleAxiosError } from ".";
import { getToken } from "./Auth";

async function getAll(
  { page } = {
    page: 1,
  }
) {
  try {
    const res = await axios({
      url: `${URL}/categories`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        page: page,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function getById(id) {
  try {
    const res = await axios({
      url: `${URL}/categories/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function create(name, description) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/categories`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        name,
        description,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function update(id, name, description) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/categories/${id}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        name,
        description,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

const CategoriesService = {
  getAll,
  getById,
  create,
  update,
};

export default CategoriesService;
