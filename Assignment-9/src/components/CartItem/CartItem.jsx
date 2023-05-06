import React, { useState } from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const CartItem = ({ product }) => {

    const { id, name, picture, category, jobType, jobTime, location, salary } = product;

    return (
        <div>

            <div className='flex flex-col lg:flex-row lg:justify-between items-center border p-5 rounded-md'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='mr-5'>
                        <img className='bg-gray-300 px-7 py-12 w-40' src={picture} alt="" />
                    </div>

                    <div>
                        <h3 className='font-semibold text-center lg:text-left mt-3 lg:mt-0'>{name}</h3>
                        <p className='text-gray-600 text-center lg:text-left'>{category}</p>
                    
                        <div className='text-center lg:text-left'>
                            <button className='border border-purple-400 rounded text-purple-600 hover:text-purple-800 font-semibold px-3 py-1 mr-3'>{jobType}</button>
                        
                            <button className='border border-purple-400 rounded text-purple-600 hover:text-purple-800 font-semibold mt-3 md:mt-0 px-3 py-1 mr-3'>{jobTime}</button>
                        </div>

                        <div className='flex flex-col md:flex-row md:justify-center mb-3 text-gray-500 mt-3'>
                            <p className='flex items-center mr-7 text-sm'>
                                <MapPinIcon className="h-4 w-4 text-gray-500 mr-1" /> 
                                {location}
                            </p>

                            <p className='flex items-center text-sm'>
                                <CurrencyDollarIcon className="h-4 w-4 text-gray-500 mr-1" /> 
                                Salary: {salary}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    {/* view details button */}
                    <Link to={`/jobDetails/${id}`}>
                        <button className="btn bg-purple-500 py-2 px-6 rounded text-white font-semibold hover:bg-purple-600">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartItem;