import "./ProfileMenu.css";
import { useNavigate } from "react-router-dom";

function ProfileMenu() {

  const navigate = useNavigate(); // ✅ MUST ADD

  return (
    <div className="profile-menu">

      <h4>Welcome</h4>
      <p className="sub-text">
        To access account and manage orders
      </p>

      <button
        className="login-btn"
        onClick={() => navigate("/Login")} // ✅ lowercase
      >
        LOGIN / SIGNUP
      </button>

      <hr />

      <p>Orders</p>
      <p>Wishlist</p>
      <p>Gift Cards</p>
      <p>Contact Us</p>
      <p>
        Myntra Insider <span className="new">New</span>
      </p>

      <hr />

      <p>Myntra Credit</p>
      <p>Coupons</p>
      <p>Saved Cards</p>
      <p>Saved VPA</p>
      <p>Saved Addresses</p>

    </div>
  );
}

export default ProfileMenu;
