import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../services/orderService";
import OrderTimeline from "../../components/OrderTimeline/OrderTimeline";
import "./orderStatusPage.css";

const steps = [
  "Order Received",
  "Preparing",
  "Out for Delivery",
  "Delivered"
];

const OrderStatusPage = () => {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchOrder = async () => {
    try {
      const data = await getOrderById(id);
      setOrder(data);
    } catch (err) {
      console.log("Error fetching order");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();

    // 🔥 REAL-TIME SIMULATION (Polling)
    const interval = setInterval(() => {
      fetchOrder();
    }, 4000);

    return () => clearInterval(interval);
  }, [id]);

  if (loading) {
    return <div className="status-loader">Loading order status...</div>;
  }

  if (!order) {
    return <div className="error">Order not found</div>;
  }

  const currentIndex = steps.indexOf(order.status);

  return (
    <div className="status-container container">

      <h2>Order Tracking</h2>
      <div className="order-id">
        Order ID: <span>{order._id}</span>
      </div>

      {/* TIMELINE */}
<OrderTimeline currentStatus={order.status} />
    
      {/* STATUS INFO */}
      <div className="status-box">
        Current Status: <b>{order.status}</b>
      </div>

    </div>
  );
};

export default OrderStatusPage;