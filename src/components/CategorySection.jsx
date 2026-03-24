import React from "react";
import "./CategorySection.css"; 

// ✅ IMPORT ALL IMAGES
import men from "../assets/menshirts.jpg";
import women from "../assets/ethnic.jpg";
import watch from "../assets/watch.jpg";
import shoes from "../assets/shoes.jpg";
import makeup from "../assets/makeup.jpg";
import westernwear from "../assets/westernwear.jpg";
import dailywear from "../assets/dailywear.jpg";
import innerwear from "../assets/innerwear.jpg";
import cosmetics from "../assets/cosmetics.jpg";
import ornaments from "../assets/ornaments.jpg";
import earrings from "../assets/earrings.jpg";
import footwear from "../assets/footwear.jpg";
import casualwear from "../assets/casualwear.jpg";
import mensthings from "../assets/mensthings.jpg";
import kidswear from "../assets/kidswear.jpg";
import grooming from "../assets/grooming.jpg";
import formalwear from "../assets/formalwear.jpg";
import lougwear from "../assets/lougwear.jpg";
const Category = () => {
  return (
    <div className="category">
      <h2>SHOP BY CATEGORY</h2>

      <div className="category-grid">

        <div className="category-card">
          <img src={men} alt="" />
          <div className="category-box">
            <p>Casual Wear</p>
            <h3>40-80% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={women} alt="" />
          <div className="category-box">
            <p>Ethnic Wear</p>
            <h3>50-80% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={watch} alt="" />
          <div className="category-box">
            <p>Watches</p>
            <h3>30-60% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={shoes} alt="" />
          <div className="category-box">
            <p>Shoes</p>
            <h3>40-70% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={makeup} alt="" />
          <div className="category-box">
            <p>Makeup</p>
            <h3>30-60% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={westernwear} alt="" />
          <div className="category-box">
            <p>Western Wear</p>
            <h3>40-80% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={dailywear} alt="" />
          <div className="category-box">
            <p>Daily Wear</p>
            <h3>30-70% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={innerwear} alt="" />
          <div className="category-box">
            <p>Innerwear</p>
            <h3>30-60% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={cosmetics} alt="" />
          <div className="category-box">
            <p>Cosmetics</p>
            <h3>20-50% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={ornaments} alt="" />
          <div className="category-box">
            <p>Ornaments</p>
            <h3>40-75% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={earrings} alt="" />
          <div className="category-box">
            <p>Earrings</p>
            <h3>35-70% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={footwear} alt="" />
          <div className="category-box">
            <p>Footwear</p>
            <h3>30-80% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={casualwear} alt="" />
          <div className="category-box">
            <p>WFH Casualwear</p>
            <h3>25-80% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={mensthings} alt="" />
          <div className="category-box">
            <p>Bags, Belt, Wallet</p>
            <h3>15-80% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={kidswear} alt="" />
          <div className="category-box">
            <p>Kidswear</p>
            <h3>10-80% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

        <div className="category-card">
          <img src={grooming} alt="" />
          <div className="category-box">
            <p>Grooming</p>
            <h3>40-80% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

          <div className="category-card">
          <img src={formalwear} alt="" />
          <div className="category-box">
            <p>formalwear</p>
            <h3>40-80% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>


 <div className="category-card">
          <img src={lougwear} alt="" />
          <div className="category-box">
            <p>lougwear</p>
            <h3>20-80% OFF</h3>
            <span>Shop Now</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Category;