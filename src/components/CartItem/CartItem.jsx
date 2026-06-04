import "./cartItem.css";
import { useCart } from "../../context/CartContext";
import API from "../../services/api";

const CartItem = ({ item }) => {
  const { updateQty, removeFromCart } = useCart();
const IMAGE_BASE_URL = API.defaults.baseURL;
  return (
    <div className="cart-item">

      <img   src={`${IMAGE_BASE_URL}${item.image}`} alt={item.name} />

      <div className="cart-info">
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
      </div>

      {/* QUANTITY CONTROLS */}
      <div className="qty-controls">
        <button
          onClick={() =>
            updateQty(item._id, Math.max(1, item.qty - 1))
          }
        >
          -
        </button>

        <span>{item.qty}</span>

        <button
          onClick={() => updateQty(item._id, item.qty + 1)}
        >
          +
        </button>
      </div>

      {/* REMOVE */}
        <button
    className="delete-btn"
    onClick={() => removeFromCart(item._id)}
  >
    🗑
  </button>

    </div>
  );
};

export default CartItem;