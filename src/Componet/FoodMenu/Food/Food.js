import React from 'react';
import './Food.css';

const Food = (props) => {
    const {price,picture,title,description}= props.food;
    return (
        <div className='col-4'>
            <div className='food_menu'>
            <img className='food_Image' src={picture} alt="food"/>
           <h5>{title}</h5>
           <p>{description}</p>
           <h3>{price}</h3>

            </div>
           
        </div>
    );
};

export default Food;