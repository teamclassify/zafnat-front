import axios from "axios";
import { URL, handleAxiosError } from ".";

async function getAll(productId) {
  try {
    const res = await axios({
      url: `${URL}/recomendaciones/${productId}`,
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

const RecomendacionService = {
  getAll,
};

export default RecomendacionService;
