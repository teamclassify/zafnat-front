import axios from "axios";
import { URL, handleAxiosError } from ".";
import { getToken } from "./Auth";

async function upload(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const token = await getToken();

    if (!token) throw new Error("Token not found");

    const res = await axios({
      url: `${URL}/file/upload`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });

    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
}

const FileService = {
  upload,
};

export default FileService;
