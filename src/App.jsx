import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage/MenuPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import OrderStatusPage from "./pages/OrderStatusPage/OrderStatusPage";
import Navbar from "./components/Navbar/Navbar";
import { CartProvider } from "./context/CartContext";
import ChatWidget from "./components/ChatWidget/ChatWidget";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <ChatWidget/>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order/:id" element={<OrderStatusPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;