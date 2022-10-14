import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { BsCart4 } from "react-icons/bs";

import "./NavBar.css";
import Cart from "../cart/Cart";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showCartFunc = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt={Logo} />
      </div>

      <div className="cart" onClick={showCartFunc}>
        <BsCart4 className="cart-icon" />
        <span>10</span>
      </div>

      <Cart isOpen={isOpen} showCartFunc={showCartFunc} />
    </nav>
  );
};

export default NavBar;
