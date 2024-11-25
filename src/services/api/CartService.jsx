import axios from "axios";
import { URL, handleAxiosError } from ".";
import { getToken } from "./Auth";

async function getAll() {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/cart-product`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function create({ productId, quantity = 1 }) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/cart-product/create`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        quantity: quantity,
        productId: productId,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function update({ id, quantity }) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/cart-product/update/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        quantity: quantity,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function remove({ id }) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/cart-product/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

const ProductsService = {
  getAll,
  create,
  update,
  remove,
};

export default ProductsService;
