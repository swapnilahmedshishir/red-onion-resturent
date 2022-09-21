import React from "react";
import { Link } from "react-router-dom";
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
        <Link to='/home' className="navbar-brand">
          <img className="logo_image" src={Logo} alt="logo-ima" />
        </Link>

        <div className="d-flex collapse navbar-collapse">
          <ul className="navbar-nav  flex-row flex-wrap ms-md-auto">
            <li className="nav-item p-3">{CartIcon}</li>
            <li className="nav-item p-3">
              <Link to='/Signin'><button className="btn">Sign in</button></Link>
            </li>
            <li className="nav-item p-3">
             <Link to='/singUp'><button className="btn btn-danger">Sign up</button></Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
