import React, { useState } from 'react';
import FoodCatagory from './FoodCatagory/FoodCatagory';
import FoodItem from './FoodItem/FoodItem';

const FoodMenu = (props) => {
 const [catgory ,setCatgory] = useState("Lunch");
 //console.log(catgory);   
 return (
        <div>
            <FoodCatagory catgory={catgory} setCatgory={setCatgory}></FoodCatagory>
            <FoodItem catgory={catgory}></FoodItem>
        </div>
    );
};

export default FoodMenu;