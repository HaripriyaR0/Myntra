import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ data }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  if (!data) return null;

  // 🔥 CARD CLICK
  const handleCardClick = () => {
    navigate(`/product/${data.id}`);
  };

  // 🔥 ADD TO CART
  const handleAddToCart = (e) => {
    e.stopPropagation(); // ❗ important
    addToCart(data);
  };

  // 🔥 WISHLIST (dummy for now)
  const handleWishlist = (e) => {
    e.stopPropagation(); // ❗ important
    alert("Added to Wishlist ❤️");
  };

  return (
    <div className="product-card" onClick={handleCardClick}>

      {/* IMAGE */}
      <div className="image-box">
        <img src={data.image} alt="" />

        {/* ❤️ WISHLIST */}
        <div className="wishlist" onClick={handleWishlist}>
          ❤️
        </div>
      </div>

      {/* INFO */}
      <div className="product-info">
        <h4>{data.name}</h4>
        <p>₹{data.price}</p>
      </div>

      {/* 🛒 ADD TO CART */}
      <button className="add-btn" onClick={handleAddToCart}>
        ADD TO BAG
      </button>

    </div>
  );
}

export default ProductCard;
