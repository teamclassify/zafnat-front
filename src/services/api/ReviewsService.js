import axios from "axios";
import { URL, handleAxiosError } from ".";

async function getAll(productId) {
  try {
    const res = await axios({
      url: `${URL}/reviews`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        productId
      }
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
  getById
};

export default ReviewsService;
