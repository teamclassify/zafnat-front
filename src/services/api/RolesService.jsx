import axios from "axios";
import { URL, handleAxiosError } from ".";
import { getToken } from "./Auth";

async function getAll() {
  const token = await getToken();

  try {
    const res = await axios({
      url: `${URL}/users/roles`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function setRole(userId, roleId) {
  const token = await getToken();

  try {
    const res = await axios({
      url: `${URL}/users/set-role`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        userId,
        roleId,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

async function unsetRole(userId, roleId) {
  const token = await getToken();

  try {
    const res = await axios({
      url: `${URL}/users/unset-role`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        userId,
        roleId,
      },
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

const RolesService = {
  getAll,
  setRole,
  unsetRole,
};

export default RolesService;
