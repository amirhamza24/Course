import React, { useEffect, useState } from 'react';
import topImg from '../../../public/assets/All Images/Vector-1.png'
import { getStoredCart } from '../../utilities/fakeDb';
import { useLoaderData } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const AppliedJobs = () => {
    const { cartArray } = useLoaderData()
    // console.log(cartArray);


    return (
        <div>
            <div>
                <img className='absolute top-0 right-0 w-60' src={topImg} alt="" />
            </div>

            <div className='text-center my-20'>
                <h2 className='text-4xl font-bold text-gray-800'>Applied Jobs</h2>
            </div>


            <div>
                <div className='w-5/6 text-right'>
                    <button className='border border-purple-400 rounded text-purple-600 hover:text-purple-800 font-semibold px-3 py-1 mr-3'>Remote</button>

                    <button className='border border-purple-400 rounded text-purple-600 hover:text-purple-800 font-semibold px-3 py-1 mr-3'>Onsite</button>
                </div>
            </div>

            <div className='flex items-start justify-center min-h-screen text-gray-900'>

                <div className='flex flex-col p-6 space-y-4 sm:p-10'>
                    {/* <h2 className='font-semibold text-xl'>{cartArray.length}</h2> */}

                    <ul className='flex flex-col space-y-6'>
                        {
                            cartArray.map(product => (
                                <CartItem
                                    key={product.id}
                                    product={product}
                                ></CartItem>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;