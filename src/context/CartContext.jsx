import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

const API = "https://69c650eff272266f3eac53c8.mockapi.io/api/m1/cart";


export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart items
  const getCart = async () => {
    const res = await axios.get(API);
    setCart(res.data);
  };

  useEffect(() => {
    getCart();
  }, []);

  // Add to cart
  const addToCart = async (item) => {
    const exist = cart.find((c) => c.name === item.name);
    if (exist) {
      await axios.put(`${API}/${exist.id}`, { ...exist, quantity: exist.quantity + 1 });
    } else {
      await axios.post(API, { ...item, quantity: 1 });
    }
    getCart();
  };

  // Update quantity
  const updateQty = async (id, quantity) => {
    const item = cart.find((c) => c.id === id);
    await axios.put(`${API}/${id}`, { ...item, quantity });
    getCart();
  };

  // Remove from cart
  const removeFromCart = async (id) => {
    await axios.delete(`${API}/${id}`);
    getCart();
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
