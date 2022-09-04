import React from 'react';
import './serviceMethod.css';
import Data from '../../../FackData/ServiceDaata.json';
const ServiceMethod = () => {
 const serviseData = Data ;

 
    return (
        <div className='d-flex'>
            {
                 serviseData.map(data => 
                        <div key={data._id}>
                            <div className='servise_template'>
                            <div className='service_text'>
                            <img className='display_image' src={data.picture} alt="service_image"/>
                                <div className='d-flex'>
                                    <div className='row mt-4'>
                                        <div className='col-2'>
                                            <img className='p-1' src={data.icon} alt="icon"/>
                                           
                                        </div>
                                        <div className='col-10'>
                                            <h5>{data.title}</h5>
                                            <p className='text-secondary text-right'>{data.about}</p>                                            
                                        </div>

                                    </div>

                                </div>
                            </div>
                            </div>
                        </div>

                
            )}
        </div>
    );
};

export default ServiceMethod;