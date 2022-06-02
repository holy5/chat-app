import axios from "axios";
import { userData } from "../../types";

const baseUrl = import.meta.env.VITE_BASEURL;

const createUser = async (data: userData) => {
  const res = await axios.post(`${baseUrl}/auth`, data);
  return res.data;
};
const login = async (data: userData) => {
  const res = await axios.post(`${baseUrl}/auth/login`, data);
  return res.data;
};

export { createUser, login };
