import axios from "axios";
import { URL, handleAxiosError } from ".";
import { getToken } from "./Auth";

async function findById(id) {
  try {
    const res = await axios({
      url: `${URL}/orders/${id}`,
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

async function getByUser(userId) {
  try {
    const res = await axios({
      url: `${URL}/orders/user/${userId}`,
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
async function getAll() {
  try {
    const res = await axios({
      url: `${URL}/orders`,
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

async function create({ order_items, address_id, user_id }) {
  const token = await getToken();

  if (!token) throw new Error("Token not found");

  try {
    const res = await axios({
      url: `${URL}/orders/create`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        order_items,
        address_id,
        user_id,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

const OrdersService = {
  create,
  findById,
  getByUser,
  getAll,
};

export default OrdersService;
