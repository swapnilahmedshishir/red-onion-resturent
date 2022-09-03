import React from 'react';
import './FoodCatagory.css';
const FoodCatagory = (props) => {
    const {catgory, setCatgory} = props;
    //console.log(catgory);
    return (
        <div className='catgory_item'>
            <button className='cataory_btn' onClick={() => setCatgory('breakfast')}>Breakfast</button>
            <button className='cataory_btn' onClick={() => setCatgory('lunch')}>Lunch</button>
            <button className='cataory_btn' onClick={() => setCatgory('dinner')}>Dinner</button>
        </div>
    );
};

export default FoodCatagory;