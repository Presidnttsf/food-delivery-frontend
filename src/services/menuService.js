import API from "./api";

export const fetchMenu = async () => {
  const res = await API.get("/menu");
  return res.data;
};