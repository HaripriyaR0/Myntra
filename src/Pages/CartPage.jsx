import React, { useState, useEffect } from "react";

// Replace with your actual API
const API_URL = "https://69c650eff272266f3eac53c8.mockapi.io/api/m1/cart";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: "Shirt", price: 499, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Dress", price: 999, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Jeans", price: 799, image: "https://via.placeholder.com/100" }
  ]);

  // Load cart items from API
  const loadCart = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setCart(data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  // Add to cart
  const handleAddToCart = async (product) => {
    const existing = cart.find(item => item.name === product.name);

    if (existing) {
      await fetch(`${API_URL}/${existing.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...existing, qty: existing.qty + 1 })
      });
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...product, qty: 1 })
      });
    }

    loadCart();
  };

  // Increase qty
  const increaseQty = async (item) => {
    await fetch(`${API_URL}/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...item, qty: item.qty + 1 })
    });
    loadCart();
  };

  // Decrease qty
  const decreaseQty = async (item) => {
    if (item.qty === 1) {
      await fetch(`${API_URL}/${item.id}`, { method: "DELETE" });
    } else {
      await fetch(`${API_URL}/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...item, qty: item.qty - 1 })
      });
    }
    loadCart();
  };

  // Remove item
  const removeItem = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadCart();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Myntra Style Cart</h1>

      {/* Products */}
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* {products.map(product => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={product.image} alt={product.name} width={100} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        )
        )
        } */}
      </div>

      {/* Cart */}
      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(item => (
        <div key={item.id} style={{ display: "flex", gap: "20px", alignItems: "center", marginBottom: "10px" }}>
          <img src={item.image} alt={item.name} width={50} />
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price} x {item.qty} = ₹{item.price * item.qty}</p>
          </div>
          <div>
            <button onClick={() => increaseQty(item)}>+</button>
            <button onClick={() => decreaseQty(item)}>-</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
