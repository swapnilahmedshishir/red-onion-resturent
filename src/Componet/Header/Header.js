import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const Logo = "https://i.postimg.cc/nzQJXbng/logo2.png";
  const CartIcon = (
    <img
      src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
      alt="cart_icon"
    />
  );
  

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo_image" src={Logo} alt="logo-ima" />
        </a>

        <div className="d-flex collapse navbar-collapse">
          <ul className="navbar-nav  flex-row flex-wrap ms-md-auto">
            <li className="nav-item p-3">{CartIcon}</li>
            <li className="nav-item p-3">
              <button className="btn">Login</button>
            </li>
            <li className="nav-item p-3">
              <button className="btn btn-danger">Sign up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
