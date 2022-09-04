import React from 'react';
import './Service.css';
import ServiceMethod from './ServiceMethod/ServiceMethod';
const Service = () => {
    return (
        <div className='container'>
            <div className='m-3'>
                <h2>Why you choose us</h2>
                <p><b className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ab autem <br/> incidunt quas tenetur ipsa iusto facilis ullam amet repudiandae! </b></p>
            </div>
            <ServiceMethod></ServiceMethod>
        </div>
    );
};

export default Service;