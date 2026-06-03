import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./navbar.css";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="navbar">

      {/* LEFT - BRAND */}
      <div className="logo">
        🍔 FoodExpress
      </div>

      {/* CENTER - LINKS */}
      <div className="nav-links">
        <Link to="/">Menu</Link>
        <Link to="/cart">
          Cart
          {totalItems > 0 && (
            <span className="badge">{totalItems}</span>
          )}
        </Link>
      </div>

      {/* RIGHT - CTA */}
      <div className="nav-cta">
        <button>Order Now</button>
      </div>

    </nav>
  );
};

export default Navbar;