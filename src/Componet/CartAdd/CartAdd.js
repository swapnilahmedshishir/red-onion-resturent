import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FackData from '../../FackData/generated.json';
import './CartAdd.css';

const CartAdd = (props) => {
    const {foodId} = useParams();
    const fackData = FackData;
    const food = fackData.find(fd => fd._id === foodId )
    const {_id , price , picture, title , about} = food;
    const CartIc = (
        <img className='px-2'
         src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
         alt="cart_icon"
       />
     );
     
     const [quantity , setQuntity] = useState(1);
     
     const increment = () => {
        setQuntity(quantity + 1);
     }
     
     const decrement = () => {
        if(quantity > 1){
            setQuntity(quantity - 1);

        }
        
     }
     

    //console.log(quantity);
    return (
        <div className='container p-5'>
            <div className='d-flex row'>
                <div className='col-5'>
                    <div className='desciption_food'>
                        <h2>{title}</h2>
                        <p>{about}</p>
                        <div className='d-flex row p-4'>
                            <div className='col-4'><h3>{price}</h3></div>
                            <div className='col-8'>
                            <input type='button' className='btn btn-success' value="-" onClick={() => decrement()} />
                                <span className='p-3'>{quantity}</span>
                            <input type='button' className='btn btn-success button-value' value="+" onClick={() => increment()} />
                            </div>
                        </div>
                        <button className="btn btn-danger"> {CartIc}  Add Cart  </button>
                    </div>
                </div>
                <div className='col-7'>
                 <img className='img-style' src={picture} alt='food_menu'/>
                </div>

            </div>
           
        </div>
    );
};

export default CartAdd;