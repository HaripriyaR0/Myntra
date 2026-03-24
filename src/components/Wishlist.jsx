import React from "react";
import "./Wishlist.css";
import Footer from "./Footer";
import greendress from "../assets/greendress.jpg";
import handswaistlooking from "../assets/hands-waist-looking.jpg";
import jeans from "../assets/jeans.jpg";
import jeansgirls from "../assets/jeansgirls.jpg";   // ✅ add .jpg
import kurti from "../assets/kurti.jpg";
import menshirts from "../assets/menshirts.jpg";     // ✅ add .jpg
import women from "../assets/women.jpg";
import womenshirts from "../assets/womenshirts.jpg";

const Wishlist = () => {
  const wishlistItems = [
  {
    id: 1,
    image: greendress,
    brand: "Roadster",
    name: "Men Solid T-shirt",
    price: 499,
    oldPrice: 999,
    discount: "50% OFF",
  },
  {
    id: 2,
    image: handswaistlooking,
    brand: "H&M",
    name: "Casual Shirt",
    price: 799,
    oldPrice: 1599,
    discount: "50% OFF",
  },
  {
    id: 3,
    image: jeans,
    brand: "Zara",
    name: "Slim Fit Shirt",
    price: 999,
    oldPrice: 1999,
    discount: "50% OFF",
  },
  {
    id: 4,
    image: jeansgirls,
    brand: "H&M",
    name: "Women Top",
    price: 699,
    oldPrice: 1399,
    discount: "50% OFF",
  },
  {
    id: 5,
    image: kurti,
    brand: "Zara",
    name: "Stylish Top",
    price: 899,
    oldPrice: 1799,
    discount: "50% OFF",
  },
  {
    id: 6,
    image: menshirts,
    brand: "Levis",
    name: "Blue Jeans",
    price: 1499,
    oldPrice: 2999,
    discount: "50% OFF",
  },
  {
    id: 7,
    image: women,
    brand: "Biba",
    name: "Ethnic Dress",
    price: 1299,
    oldPrice: 2599,
    discount: "50% OFF",
  },
  {
    id: 8,
    image: womenshirts,
    brand: "Nike",
    name: "Hoodie",
    price: 1999,
    oldPrice: 3999,
    discount: "50% OFF",
  },
];

  return (
    <>
      <div className="wishlist-page">
        <h2 className="wishlist-title">
          My Wishlist <span>(2 items)</span>
        </h2>

        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              
              {/* REMOVE BUTTON */}
              <div className="remove-btn">✕</div>

              {/* IMAGE */}
              <img src={item.image} alt={item.name} />

              {/* DETAILS */}
              <div className="wishlist-details">
                <h4>{item.brand}</h4>
                <p>{item.name}</p>

                <div className="price-section">
                  <span className="price">₹{item.price}</span>
                  <span className="old-price">₹{item.oldPrice}</span>
                  <span className="discount">{item.discount}</span>
                </div>
              </div>

              {/* BUTTON */}
              <button className="move-btn">MOVE TO BAG</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;