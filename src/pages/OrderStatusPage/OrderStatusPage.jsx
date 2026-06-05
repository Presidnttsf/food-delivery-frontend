import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getOrderById,
  updateOrderToNextStatus,
} from "../../services/orderService";
import OrderTimeline from "../../components/OrderTimeline/OrderTimeline";
import "./orderStatusPage.css";

const stepLabels = {
  ORDER_RECEIVED: "Order Received",
  PREPARING: "Preparing",
  OUT_FOR_DELIVERY: "Out for Delivery",
  DELIVERED: "Delivered",
};

const OrderStatusPage = () => {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchOrder = async () => {
    try {
      const data = await getOrderById(id);
      setOrder(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const handleNextStatus = async () => {
    try {
      const updatedOrder = await updateOrderToNextStatus(id);

      // If API returns order directly
      setOrder(updatedOrder);

      // If API returns { data: order }
      // setOrder(updatedOrder.data);

    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="status-loader">
        Loading order status...
      </div>
    );
  }

  if (!order) {
    return <div className="error">Order not found</div>;
  }

  return (
    <div className="status-container container">
      <h2>Order Tracking</h2>

      <div className="order-id">
        Order ID: <span>{order._id}</span>
      </div>

      <OrderTimeline currentStatus={order.status} />

      <div className="status-cta">
        <p>
          Current Status:
          <b> {stepLabels[order.status]}</b>
        </p>

        <button
        
          onClick={handleNextStatus}
          disabled={order.status === "DELIVERED"}
        >
          {order.status === "DELIVERED"
            ? "Order Delivered"
            : "Check Status"}
        </button>
      </div>
    </div>
  );
};

export default OrderStatusPage;