import axios from "axios";
import { URL, handleAxiosError } from ".";
import { getToken } from "./Auth";

async function getAll(
  { status, page, name, sizes, colors, categories } = {
    status: "",
    page: 1,
    name: "",
    sizes: [],
    colors: [],
    categories: [],
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
        sizes: sizes,
        colors: colors,
        categories: categories,
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

async function create({ name, description, categories }) {
  const token = await getToken();

  if (!token) throw new Error("Token not found");

  try {
    const res = await axios({
      url: `${URL}/products`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        name,
        description,
        categories,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function update({ id, name, description, categories, status }) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/products/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        name,
        description,
        categories,
        status,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function updateProductSku({
  id,
  sku,
  name,
  price,
  color_attribute_id,
  size_attribute_id,
}) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/products/${id}/sku`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        id: sku,
        price,
        sku: name,
        color_attribute_id,
        size_attribute_id,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function getColors() {
  try {
    const res = await axios({
      url: `${URL}/products/colors`,
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

async function getSizes() {
  try {
    const res = await axios({
      url: `${URL}/products/sizes`,
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
  create,
  update,
  updateProductSku,
  getColors,
  getSizes,
};

export default ProductsService;
