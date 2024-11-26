import axios from "axios";
import { URL, handleAxiosError } from ".";
import { getToken } from "./Auth";

async function getAll() {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/address`,
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

async function create({ address, city, postalCode, country }) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/address/create`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        address_line_1: address,
        city: city,
        postal_code: postalCode,
        country: country,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

const AddressService = {
  getAll,
  create,
};

export default AddressService;
