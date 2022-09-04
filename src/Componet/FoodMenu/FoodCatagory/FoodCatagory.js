import { red } from '@mui/material/colors';
import { fontSize, fontWeight } from '@mui/system';
import React from 'react';
import './FoodCatagory.css';
const FoodCatagory = (props) => {
    const {catgory, setCatgory} = props;
//console.log(catgory);
 const  btnActive = {    
    color: 'red',
    fontWeight:500
}

    
    return (
        <div className='catgory_item'> 
            <button  className='cataory_btn' onClick={() => setCatgory('breakfast')}>Breakfast</button>
            <button  className='cataory_btn' onClick={() => setCatgory('lunch')}>Lunch</button>
            <button  className='cataory_btn' onClick={() => setCatgory('dinner')}>Dinner</button><br/><br/>
            <p style={btnActive}>{catgory}</p>
        </div>
    );
};

export default FoodCatagory;