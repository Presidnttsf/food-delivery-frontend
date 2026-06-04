import API from "./api";

export const createOrder = async (data) => {
  const res = await API.post("/orders", data);
  return res.data.data;
};

export const getOrderById = async (id) => {
  const res = await API.get(`/orders/${id}`);
  return res.data.data;
};

export const updateOrderStatus = async (id, status) => {
  const res = await API.put(`/orders/${id}/status`, { status });
  return res.data.data;
};

export const updateOrderToNextStatus = async (id) => {
  const res = await API.patch(
    `/orders/${id}/next-status`
  );

  return res.data;
};