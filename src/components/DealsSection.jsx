import React, { useState } from "react";
import "./DealsSection.css";

import shirt from "../assets/menshirts.jpg";
import dress from "../assets/greendress.jpg";
import fossil from "../assets/fossil.jpg";
import shoes from "../assets/shoes.png";
import cosmetics from "../assets/cosmetics.jpg";
import headphone from "../assets/headphone.jpg";
import bag from "../assets/bag.jpg";
import sunglasses from "../assets/sunglasses.jpg";
import casio from "../assets/casio.jpg"
const Deals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [

  {
    id: 1,
    image: fossil,
    brand1: "Fossil",
    brand2: "Titan",
    title: "Premium Watches",
    offer: "Min. 40% Off",
  },
  {
    id: 2,
    image: shoes,
    brand1: "Nike",
    brand2: "Adidas",
    title: "Top Sports Shoes",
    offer: "Min. 50% Off",
  },
  {
    id: 3,
    image: cosmetics,
    brand1: "Lakme",
    brand2: "Maybelline",
    title: "Beauty Essentials",
    offer: "Min. 30% Off",
  },
  {
    id: 4,
    image: headphone,
    brand1: "Boat",
    brand2: "JBL",
    title: "Top Headphone",
    offer: "Min. 60% Off",
  },
  {
    id: 5,
    image: bag,
    brand1: "Caprese",
    brand2: "Lavie",
    title: "Stylish Handbags",
    offer: "Min. 45% Off",
  },
  {
    id: 6,
    image: sunglasses,
    brand1: "RayBan",
    brand2: "Fastrack",
    title: "Cool Sunglasses",
    offer: "Min. 35% Off",
  },

  // NEXT SLIDE
  {
    id: 7,
    image: shirt,
    brand1: "HIGHLANDER",
    brand2: "KETCH",
    title: "Casual Shirts",
    offer: "Min. 70% Off",
  },
  {
    id: 8,
    image: dress,
    brand1: "SASSAFRAS",
    brand2: "TOKYO TALKIES",
    title: "Trendy Dresses",
    offer: "Min. 65% Off",
  },
  {
    id: 9,
    image: shoes,
    brand1: "Puma",
    brand2: "Reebok",
    title: "Active Footwear",
    offer: "Min. 55% Off",
  },
  {
    id: 10,
    image: casio,
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
      <h2>DEALS OF THE DAY</h2>

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