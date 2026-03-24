import React, { useState } from "react";
import "./LuxeDeals.css";

import shirt from "../assets/menshirts.jpg";
import dress from "../assets/greendress.jpg";

const Deals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
   
  {
    id: 1,
    image: shirt,
    brand1: "Fastrack",
    brand2: "Titan",
    title: "Trendy Styles for Every Wrist",
    offer: "Min. 40% Off",
  },
  {
    id: 2,
    image: dress,
    brand1: "Casio",
    brand2: "G-Shock",
    title: "Rugged & Stylish Timepieces",
    offer: "Min. 30% Off",
  },
  {
    id: 3,
    image: shirt,
    brand1: "Fossil",
    brand2: "Diesel",
    title: "Premium Watches Collection",
    offer: "Min. 50% Off",
  },
  {
    id: 4,
    image: dress,
    brand1: "Sonata",
    brand2: "Timex",
    title: "Everyday Classic Watches",
    offer: "Min. 35% Off",
  },
  {
    id: 5,
    image: shirt,
    brand1: "Rolex",
    brand2: "Omega",
    title: "Luxury Redefined",
    offer: "Min. 20% Off",
  },
  {
    id: 6,
    image: dress,
    brand1: "Boat",
    brand2: "Noise",
    title: "Smartwatches for Smart Life",
    offer: "Min. 60% Off",
  },

  // repeat for next slides
  {
    id: 7,
    image: shirt,
    brand1: "Apple",
    brand2: "Samsung",
    title: "Smartwatch Revolution",
    offer: "Min. 25% Off",
  },
  {
    id: 8,
    image: dress,
    brand1: "Fire-Boltt",
    brand2: "Noise",
    title: "Affordable Smart Tech",
    offer: "Min. 55% Off",
  },
  {
    id: 9,
    image: shirt,
    brand1: "Titan",
    brand2: "Sonata",
    title: "Elegant Timepieces",
    offer: "Min. 45% Off",
  },
  {
    id: 10,
    image: dress,
    brand1: "Casio",
    brand2: "Edifice",
    title: "Sporty & Bold Designs",
    offer: "Min. 35% Off",
  },

  ];

  const itemsPerSlide = 5;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  return (
    <div className="deals">
      <h2>LUXE GRAND REDUCTION DEALS</h2>

      <div className="carousel-container">
        <div
          className="deals-slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div className="slide" key={slideIndex}>
              {products
                .slice(
                  slideIndex * itemsPerSlide,
                  slideIndex * itemsPerSlide + itemsPerSlide
                )
                .map((item) => (
                 <div className="banner-card" key={item.id}>
  <img src={item.image} alt="" />

  <div className="overlay">
    {/* Brand Logos Row */}
    <div className="logo-row">
      <span className="brand-left">{item.brand1}</span>
      <span className="brand-right">{item.brand2}</span>
    </div>

    {/* Divider */}
    <div className="line"></div>

    {/* Text */}
    <p className="desc">{item.title}</p>

    {/* Offer */}
    <h2>{item.offer}</h2>
  </div>
</div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Deals;