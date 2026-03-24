import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { useState, useRef, useEffect } from "react"; // ✅ FIXED
import MegaMenu from "./MegaMenu";
import "./Navbar.css";
import logo from "../assets/logo.png";
import ProfileMenu from "./ProfileMenu";

function Navbar() {

  const [menu, setMenu] = useState(""); // ✅ FIXED
  const [profileOpen, setProfileOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">

      {/* LOGO */}
      <img src={logo} alt="logo" className="logo" />

      {/* NAV LINKS */}
      <div className="nav-links">

        <div
          onMouseEnter={() => setMenu("men")}
          onMouseLeave={() => setMenu("")}
        >
          <Link to="/men">MEN</Link>
          {menu === "men" && <MegaMenu type="men" />}
        </div>

        <div
          onMouseEnter={() => setMenu("women")}
          onMouseLeave={() => setMenu("")}
        >
          <Link to="/women">WOMEN</Link>
          {menu === "women" && <MegaMenu type="women" />}
        </div>

        <div
          onMouseEnter={() => setMenu("kids")}
          onMouseLeave={() => setMenu("")}
        >
          <Link to="/kids">KIDS</Link>
          {menu === "kids" && <MegaMenu type="kids" />}
        </div>

        <div
          onMouseEnter={() => setMenu("beauty")}
          onMouseLeave={() => setMenu("")}
        >
          <Link to="/beauty">BEAUTY</Link>
          {menu === "beauty" && <MegaMenu type="beauty" />}
        </div>

        <div
          onMouseEnter={() => setMenu("genz")}
          onMouseLeave={() => setMenu("")}
        >
          <Link to="/genz">GENZ</Link>
          {menu === "genz" && <MegaMenu type="genz" />}
        </div>

        <div
          onMouseEnter={() => setMenu("home")}
          onMouseLeave={() => setMenu("")}
        >
          <Link to="/home">HOME</Link>
          {menu === "home" && <MegaMenu type="home" />}
        </div>

      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="search-box"
      />

      {/* ICONS */}
      <div className="icons">

        <div className="profile-wrapper" ref={wrapperRef}>
          <div
            className="icon-box"
            onClick={() => setProfileOpen(true)}
          >
            <FaUser />
            <span>Profile</span>
          </div>

          {profileOpen && <ProfileMenu />}
        </div>

        <Link to="/wishlist" className="icon-box">
  <FaHeart />
  <span>Wishlist</span>
</Link>

        <Link to="/bag" className="icon-box">
          <FaShoppingBag />
          <span>Bag</span>
        </Link>

      </div>

    </div>
  );
}

export default Navbar;
