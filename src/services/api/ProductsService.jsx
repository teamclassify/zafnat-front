import axios from "axios";
import { URL, handleAxiosError } from ".";

async function getAll(
  { status, page, name } = {
    status: "",
    page: 1,
    name: "",
  }
) {
  try {
    const res = await axios({
      url: `${URL}/products`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        status: status,
        page: page,
        name: name,
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
      url: `${URL}/products/${id}`,
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

const ProductsService = {
  getAll,
  getById,
};

export default ProductsService;
