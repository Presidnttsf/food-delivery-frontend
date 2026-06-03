import { useCart } from "../../context/CartContext";
import "./foodCard.css";

const FoodCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="food-card">

      <div className="food-img">
        <img src={item.image} alt={item.name} />
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