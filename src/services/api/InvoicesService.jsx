import axios from "axios";
import { URL, handleAxiosError } from ".";

async function findById(id) {
  try {
    const res = await axios({
      url: `${URL}/invoices/${id}`,
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
      url: `${URL}/invoices`,
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

const InvoicesService = {
  findById,
  getAll,
};

export default InvoicesService;
