import { useState } from "react";
import { useCart } from "../../context/CartContext";
import API from "../../services/api";
import "./foodCard.css";

const FoodCard = ({ item }) => {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
const IMAGE_BASE_URL = API.defaults.baseURL;

  return (
    <div className="food-card">

      <div className="food-img">

        {/* SKELETON */}
        {loading && <div className="img-skeleton"></div>}

<img
    src={`${IMAGE_BASE_URL}${item.image}`}
  alt={item.name}
  width="400"
  height="180"
  loading="lazy"
  onLoad={() => setLoading(false)}
  onError={() => setLoading(false)}
  className={loading ? "hidden-img" : "show-img"}
/>
      </div>

      <div className="food-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="food-footer">
          <span className="price">${item.price}</span>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  );
};

export default FoodCard;