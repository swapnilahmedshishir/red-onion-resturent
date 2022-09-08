import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css';

const Food = (props) => {
    const {price,picture,title,description,_id}= props.food;
    //console.log(FoodID);
    return (
        <div className='col-4'>
            <div className='food_menu'>
            <Link to={"/food/"+_id} className="menu">
            <img className='food_Image' src={picture} alt="food"/>
           <h5>{title}</h5>
           <p>{description}</p>
           <h3>{price}</h3>
            </Link>

            </div>
           
        </div>
    );
};

export default Food;