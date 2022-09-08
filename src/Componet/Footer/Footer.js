import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  const logo = "https://i.postimg.cc/0yVPhTWz/logo.png";

    return (
        <footer className='footer_part'>
            <div className='container footer_style'>
            <div className='d-flex'>
                    <div className='col-6'>
                        <img className="logo_image" src={logo} alt="footerImaga"/>
                    </div>
                    
                    <div className='col-3 justify-content-end"'>
                        <ul>
                            <li>About Online food</li>
                            <li>Read our blog</li>
                            <li>Sing up to deliver</li>
                            <li>Add your restaurant</li>
                        </ul>
                    </div>
                    <div className='col-3 justify-content-end"'>
                        <ul>
                            <li>Get help</li>
                            <li>Read FAQs</li>
                            <li>view all cities</li>
                            <li>Restaurents near me</li>
                        </ul>
                    </div>
            </div>
            <div className="d-flex flex-wrap justify-content-between align-items-center border-top">
                <p className="col-md-4 mb-0 text-white">Copyright © 2022 Red Onion Resturent</p>
                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link to="/"  className="nav-link px-2 text-white">Privacy policy.</Link></li>
                <li className="nav-item"><Link to="/"  className="nav-link px-2 text-white">Terms of use</Link></li>
                <li className="nav-item"><Link to="/"  className="nav-link px-2 text-white">Pricing</Link></li>
                </ul>
            </div>
            </div>
            
        </footer>
    );
};

export default Footer;