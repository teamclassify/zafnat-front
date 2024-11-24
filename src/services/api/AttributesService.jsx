import axios from "axios";
import { URL, handleAxiosError } from ".";

async function getAll(
  { page, type } = {
    page: 1,
    type: null,
  }
) {
  try {
    const res = await axios({
      url: `${URL}/attributes`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        page: page,
        type: type,
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
      url: `${URL}/attributes/${id}`,
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

const AttributesService = {
  getAll,
  getById,
};

export default AttributesService;
