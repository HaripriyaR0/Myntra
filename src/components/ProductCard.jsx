import React from "react";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">

      {/* IMAGE */}
      <img src={item.image} alt={item.name} />

      {/* HOVER BUTTONS */}
      <div className="hover-actions">
        <button>❤️ Wishlist</button>
        <button>🛒 Add to Bag</button>
      </div>

      <p>{item.name}</p>
      <h4>₹{item.price}</h4>
    </div>
  );
};

export default ProductCard;