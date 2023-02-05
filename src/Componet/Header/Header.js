import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import FackData from '../../FackData/generated.json';

const Header = () => {
  const Logo = "https://i.postimg.cc/nzQJXbng/logo2.png";
  
 const CartIcon = (
     <img
      src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
      alt="cart_icon"
    />
  );
  const fackData = FackData;

  const [cardPd, setCardPd] = useState([]);
  const [updatePd , setUpdatePd] = useState({});
  useEffect(() => {
    const data = localStorage.getItem('foodAdd_cart');
    const product = JSON.parse(data);
    const dataObjKey = Object.keys(product || {}); 
    const dtakey = dataObjKey.map(dtKey => {
      const products = fackData.find(fd => fd._id === dtKey);
      products.quantity = product[dtKey];
      // console.log(products);

    });
    // console.log(dtakey);

  if (product) {
    setCardPd(dataObjKey);
  }
  },[]);
  // console.log(cardPd);
  const [isShow, setIsShow] = useState(false);

  const ProductInfo = (e) =>{
    setIsShow(current => !current)
  }
  
console.log(isShow);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link to='/home' className="navbar-brand">
          <img className="logo_image" src={Logo} alt="logo-ima" />
        </Link>

        <div className="d-flex collapse navbar-collapse">
          <ul className="navbar-nav  flex-row flex-wrap ms-md-auto">
            <li className="nav-item p-3">
             
              <span className='link_item'><Link to='/cart'> {CartIcon}<span id="pdquantity">{cardPd.length}</span></Link></span>
           
            </li>
            <li className="nav-item p-3" onClick={ProductInfo}>
            {
            isShow ? (<Link to='/singUp'><button className="btn btn-warning"> Sign up </button></Link>
           
          ): (   <Link to='/Signin'><button className="btn btn-success"> Sign in </button></Link>
            )
          }  
          </li>         
          </ul>
         
          
        </div>
        <div style={{'z-index':1}}>
         
         </div>
       
      </div>
    </nav>
  );
};

export default Header;
