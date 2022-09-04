import React, { useState } from 'react';
import FoodCatagory from './FoodCatagory/FoodCatagory';
import FoodItem from './FoodItem/FoodItem';
import './FoodMenu.css';
const FoodMenu = (props) => {
 const [catgory ,setCatgory] = useState("Lunch");
 //console.log(catgory);   
 return (
        <div>
            <FoodCatagory catgory={catgory} setCatgory={setCatgory}></FoodCatagory>
            <FoodItem catgory={catgory}></FoodItem>
            <button className='checkOut-btn'>Checkout Your Food</button>
        </div>
    );
};

export default FoodMenu;