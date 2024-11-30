import axios from "axios";
import { URL, handleAxiosError } from ".";

async function getAll(productId, filters = {}) {
  const params = productId ? { productId } : {};

  try {
    const res = await axios({
      url: `${URL}/reviews`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        ...params,
        ...filters,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function getAllByUser(userId) {
  try {
    const res = await axios({
      url: `${URL}/reviews`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        userId,
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
      url: `${URL}/reviews/${id}`,
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

const ReviewsService = {
  getAll,
  getById,
  getAllByUser,
};

export default ReviewsService;
