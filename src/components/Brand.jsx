import React, { useState } from "react";
import "./Brand.css";

import shirt from "../assets/menshirts.jpg";
import dress from "../assets/greendress.jpg";

const Deals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const products = [
  {
    id: 1,
    image: shirt,
    brand1: "Nike",
    brand2: "Adidas",
    title: "Top Sports Shoes",
    offer: "Min. 50% Off",
  },
  {
    id: 2,
    image: dress,
    brand1: "Fossil",
    brand2: "Titan",
    title: "Premium Watches",
    offer: "Min. 40% Off",
  },
  {
    id: 3,
    image: shirt,
    brand1: "Jockey",
    brand2: "Calvin Klein",
    title: "Innerwear Essentials",
    offer: "Min. 35% Off",
  },
  {
    id: 4,
    image: dress,
    brand1: "Boat",
    brand2: "JBL",
    title: "Top Headphones",
    offer: "Min. 60% Off",
  },
  {
    id: 5,
    image: shirt,
    brand1: "Puma",
    brand2: "Reebok",
    title: "Activewear Picks",
    offer: "Min. 55% Off",
  },

  // next slide
  {
    id: 6,
    image: dress,
    brand1: "H&M",
    brand2: "ZARA",
    title: "Trending Fashion",
    offer: "Min. 45% Off",
  },
  {
    id: 7,
    image: shirt,
    brand1: "Apple",
    brand2: "Samsung",
    title: "Smart Gadgets",
    offer: "Min. 30% Off",
  },
  {
    id: 8,
    image: dress,
    brand1: "Levi's",
    brand2: "Wrangler",
    title: "Denim Collection",
    offer: "Min. 50% Off",
  },
  {
    id: 9,
    image: shirt,
    brand1: "US Polo",
    brand2: "Allen Solly",
    title: "Casual Wear",
    offer: "Min. 40% Off",
  },
  {
    id: 10,
    image: dress,
    brand1: "Casio",
    brand2: "G-Shock",
    title: "Sport Watches",
    offer: "Min. 35% Off",
  },


  ];

  const itemsPerSlide = 5;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  return (
    <div className="deals">
      <h2>Medal Worthy Brands To Bag</h2>

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