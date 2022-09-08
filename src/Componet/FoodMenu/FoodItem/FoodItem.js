import React, { useEffect, useState } from 'react';
import foodItemData from '../../../FackData/generated.json';
import Food from '../Food/Food';

const FoodItem = (props) => {
    const {catgory} = props;
    
    const FoodItemData = foodItemData;
    const [food, setFood] = useState([]);
    useEffect(() => {
        const matchProduct = FoodItemData.filter(
          (fd) => fd.catagory.toLowerCase() === catgory.toLowerCase());
          setFood(matchProduct);
      }, [catgory]);
      
    //console.log(food[0]._id);
    return (
        <div className='container'>
           <div className='row'>            
            {
                food.map(fd => <Food  key={fd._id} food={fd}></Food>)
            }
            </div> 
        </div>
    );
};

export default FoodItem;