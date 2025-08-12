import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import menu_icon from "../Assets/menu_icon.png";
import close_icon from "../Assets/close_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMobileMenuOpen = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p> Shopper</p>
        </div>

        <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li
            onClick={() => {
              setMenu("shop");
              setMobileMenuOpen(false);
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Shop
            </Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
              setMobileMenuOpen(false);
            }}
          >
            <Link to="/mens" style={{ textDecoration: "none" }}>
              Men
            </Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
              setMobileMenuOpen(false);
            }}
          >
            <Link to="/womens" style={{ textDecoration: "none" }}>
              Women
            </Link>
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
              setMobileMenuOpen(false);
            }}
          >
            <Link to="/kids" style={{ textDecoration: "none" }}>
              Kids
            </Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>

        <div className="nav-login-cart">
          <Link to="/login">
            {" "}
            <button>Login</button>
          </Link>
          <Link to="/cart">
            {" "}
            <img src={cart_icon} alt="" />
          </Link>

          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        <img
          src={mobileMenuOpen ? close_icon : menu_icon}
          alt="menu"
          className="nav-menu-toggle"
          onClick={toggleMobileMenuOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;
