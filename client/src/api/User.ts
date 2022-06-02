import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;

const findUserByEmail = async (email: string) => {
  const res = await axios.post(`${baseUrl}/account/findUser/email`, {
    email: email,
  });
  return res.data;
};

const updateUser = async (id: string, data: any) => {
  const res = await axios.post(`${baseUrl}/account/updateUser/${id}`, data);
  return res.data;
};

const uploadImage = async (base64Image: string) => {
  const res = await axios.post(`${baseUrl}/account/upload/image`, {
    base64Image: base64Image,
  });
  return res.data;
};

export { findUserByEmail, updateUser, uploadImage };
