import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h3>🍔 FoodExpress</h3>
          <p>Delivering happiness at your doorstep</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Menu</p>
          <p>Cart</p>
          <p>Orders</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>support@foodexpress.com</p>
          <p>+91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FoodExpress. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;