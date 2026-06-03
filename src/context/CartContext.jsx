import { createContext, useState, useContext } from "react";

// 1. Create context
export const CartContext = createContext();

// 2. Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exists = cart.find((c) => c._id === item._id);

    if (exists) {
      setCart(
        cart.map((c) =>
          c._id === item._id ? { ...c, qty: c.qty + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((c) => c._id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) return;

    setCart(
      cart.map((c) =>
        c._id === id ? { ...c, qty } : c
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook (THIS WAS MISSING)
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
};