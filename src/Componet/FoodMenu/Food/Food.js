import React from 'react';

const Food = (props) => {
    const {price,picture,title,about}= props.food;
    return (
        <div className='col-4'>
           <img src={picture} alt="food"/>
           <h4>{title}</h4>
           <p>{about}</p>
           <h3>{price}</h3>
        </div>
    );
};

export default Food;