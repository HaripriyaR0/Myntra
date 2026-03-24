import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="footer-col">
        <h4>ONLINE SHOPPING</h4>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Home & Living</p>
        <p>Beauty</p>
        <p>Gift Cards</p>
      </div>

      <div className="footer-col">
        <h4>CUSTOMER POLICIES</h4>
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>T&C</p>
        <p>Terms Of Use</p>
        <p>Track Orders</p>
        <p>Shipping</p>
        <p>Returns</p>
      </div>

      <div className="footer-col">
        <h4>EXPERIENCE MYNTRA APP</h4>
        <p>Download on Play Store</p>
        <p>Download on App Store</p>
      </div>

      <div className="footer-col">
        <h4>KEEP IN TOUCH</h4>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>YouTube</p>
      </div>

    </div>
  );
};

export default Footer;