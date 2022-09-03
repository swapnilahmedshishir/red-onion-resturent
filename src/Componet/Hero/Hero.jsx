import React from 'react';
import { Form } from 'react-bootstrap';
import './Hero.css';
const Hero = () => {
    return (
        
            
            <div className="hero_section">
                <div className='hero-text'>
                    <h1>Best food Waiting for belly </h1>
                    <Form className="d-flex from_style">
                    <Form.Control
                        type="search"
                        placeholder="Search food item"
                        className="me-2"
                        aria-label="Search"
                    />
                    <button className='button_style'>Search</button>
                    </Form>

                </div>
                
            </div>
            
       
    );
};

export default Hero;