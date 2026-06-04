import "./cartPage.css";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";


const CartPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🍽️</h2>
        <p>Add some delicious food to continue</p>
      </div>
    );
  }

  return (
    <div className="cart-page container">

      {/* LEFT: CART ITEMS */}
      <div className="cart-items">
        <h2>Your Cart</h2>

        {cart.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>

      {/* RIGHT: SUMMARY */}
      <div className="cart-summary">
        <h3>Order Summary</h3>

        <div className="summary-row">
          <span>Items</span>
          <span>{cart.length}</span>
        </div>

        <div className="summary-row total">
          <span>Total</span>
          <span>${totalAmount}</span>
        </div>

        <button
          className="checkout-btn"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
};

export default CartPage;