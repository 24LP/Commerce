import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Header.css";
import Menu from "../assets/svg/bars-solid.svg";
import Cart from "../assets/svg/cart-shopping-solid.svg";
import Close from "../assets/svg/rectangle-xmark-solid.svg";
import { useCart } from "../providers/CartProvider";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const { products } = useCart();
  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Menu} alt="" width="20" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">Nike</Link>
        </h1>
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login / Register</Link>
          </li>
          <li className="close">
            <img src={Close} alt="" width="20"></img>
          </li>
        </ul>
        <div className="nav-cart">
          <span>{products.length}</span>
          <Link to="/cart">
            <img src={Cart} alt="" width="20"></img>
          </Link>
        </div>
      </nav>
    </header>
  );
}
