import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

// Images
import topBanner from "../assets/banner-sticker.png";
import fashionsale from "../assets/fashionsale.png";
import uspoloshirt from "../assets/uspoloshirt.png";
import caprese from "../assets/caprese.jpg";
import shoes from "../assets/shoes.png";

function Banner() {

  const navigate = useNavigate();

  const slides = [
    {
      image: fashionsale,
      title: "FASHION SALE",
      subtitle: "Up To 50% Off",
      btn: "+ Explore",
      link: "/sale"
    },
    {
      image: uspoloshirt,
      title: "U.S. POLO ASSN.",
      subtitle: "Flat 40% Off on Shirts",
      btn: "+ Explore",
      link: "/men"
    },
    {
      image: caprese,
      title: "HANDBAGS",
      subtitle: "Min. 60% Off",
      btn: "+ Explore",
      link: "/women"
    },
    {
      image: shoes,
      title: "FOOTWEAR",
      subtitle: "Starting From ₹999",
      btn: "+ Explore",
      link: "/footwear"
    }
  ];

  const [current, setCurrent] = useState(0);

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* 🔥 TOP STRIP */}
      <div className="home-top-banner">
        <img src={topBanner} alt="offer" />
      </div>

      {/* 🔥 MAIN CAROUSEL */}
      <section className="home-carousel">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === current ? "home-slide active" : "home-slide"}
            onClick={() => navigate(slide.link)}
          >
            <img src={slide.image} alt="" />

            <div className="home-overlay">
              <div className="home-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button>{slide.btn}</button>
              </div>
            </div>
          </div>
        ))}

        {/* 🔥 DOTS */}
        <div className="home-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === current ? "home-dot active" : "home-dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>

      </section>
    </>
  );
}

export default Banner;
