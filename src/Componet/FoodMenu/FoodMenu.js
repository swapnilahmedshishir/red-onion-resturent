import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDb } from '../../utilities/fakedb';
import FoodCatagory from './FoodCatagory/FoodCatagory';
import FoodItem from './FoodItem/FoodItem';
import './FoodMenu.css';



const FoodMenu = (props) => {
 const [catgory ,setCatgory] = useState("Lunch");
 
 const [cartProduct, setCartProduct]  = useState(0);
 //console.log(catgory);   
 useEffect(() => {
  const saveDB = getDb();
  const readDB = JSON.parse(saveDB) || {};
  const foodItem = Object.values(readDB);
  setCartProduct(foodItem.length);
 })
 
 console.log(cartProduct);
 
 return (
   <div>
        <FoodCatagory catgory={catgory} setCatgory={setCatgory}></FoodCatagory>
        <FoodItem catgory={catgory}></FoodItem>
        {
          cartProduct === 0 ? <button className='checkOut-btn' disabled>Checkout Your Food</button>:
          <Link to='/checkout' className='checkOut_link'> <button className='checkOut-btn-enable'>Checkout Your Food</button> </Link>
          
        }
        
    </div>
    
    );
};

export default FoodMenu;