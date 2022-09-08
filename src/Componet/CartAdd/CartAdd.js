import React from 'react';
import { useParams } from 'react-router-dom';
import FackData from '../../FackData/generated.json';
import './CartAdd.css';

const CartAdd = (props) => {
    const {foodId} = useParams();
    const fackData = FackData;
    const food = fackData.find(fd => fd._id === foodId )
    const {_id , price , picture, title , about} = food;
   
    //console.log(food);
    return (
        <div className='container'>
            <div className='d-flex row'>
                <div className='col-5'>
                    <div>
                        <h1>{title}</h1>
                        <p>{about}</p>
                        <div className='d-flex'>
                            <h1>{price}</h1>
                            <span>hlow</span>
                        </div>
                        <button className="btn btn-danger"> Add  </button>
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