import axios from "axios";

const API = axios.create({
  baseURL: "https://food-delivery-backend-p7yv.onrender.com",
});

export default API;