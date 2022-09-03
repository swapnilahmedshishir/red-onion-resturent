import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import FackData from '../../FackData/generated.json';
import Hero from '../Hero/Hero';
import FoodMenu from '../FoodMenu/FoodMenu';
const Home = () => {
  const fackData = FackData ;
 const [fooditem, setfooditem] = useState([]);
 useEffect(() => {
    fackData.map(dt =>  setfooditem(dt) );
 })
//console.log(product.price);



    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <FoodMenu fackData={fackData}></FoodMenu>
        </div>
    );
};

export default Home;