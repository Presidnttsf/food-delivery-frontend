import { useState } from "react";
import "./checkoutPage.css";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../services/orderService";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.address || !form.phone) {
      return "All fields are required";
    }
    if (!/^\d{10}$/.test(form.phone)) {
      return "Please enter a valid 10-digit phone number";
    }
    if (cart.length === 0) {
      return "Cart is empty";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const orderData = {
        customerName: form.name,
        address: form.address,
        phone: form.phone,

        items: cart.map((item) => ({
          menuItemId: item._id,
          quantity: item.qty,
        })),
      };
      const res = await createOrder(orderData);

      clearCart();
      // assuming backend returns order._id
      navigate(`/order/${res.orderId}`);
    } catch (err) {
      console.log("Order Error:", err);
      console.log("Response:", err.response?.data);
      setError(
        err.response?.data?.errors?.join(", ") ||
          err.response?.data?.message ||
          "Failed to place order. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout container">
      <h2>Checkout</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        <button disabled={loading}>
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
