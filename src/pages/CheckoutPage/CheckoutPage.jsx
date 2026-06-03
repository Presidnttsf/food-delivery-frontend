import { useState } from "react";
import "./checkoutPage.css";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../services/orderService";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: ""
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
    if (form.phone.length < 10) {
      return "Enter valid phone number";
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
        customer: form,
        items: cart,
        totalAmount: cart.reduce(
          (acc, item) => acc + item.price * item.qty,
          0
        )
      };

      const res = await createOrder(orderData);

      // assuming backend returns order._id
      navigate(`/order/${res._id}`);

    } catch (err) {
      setError("Failed to place order. Try again.");
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