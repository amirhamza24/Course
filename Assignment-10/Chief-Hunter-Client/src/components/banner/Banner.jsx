import React, { useState } from 'react';
import './Banner.css'

const Banner = () => {

    return (
        <div>
            <div className='banner'>
                
                <div className='flex items-center justify-center pt-36 md:pt-24 text-center'>
                    <div>
                        <div className="title">
                            <h1 className='text-5xl md:text-8xl font-semibold'>Restaurant</h1>
                        </div>

                        <div className="info text-white">
                            <p className='text-xl md:text-2xl'>A taste of local ingredients & seasonal flavours</p>
                            <p className='uppercase text-stone-300 my-3'><small>We are ready</small></p>
                        </div>

                        <button className='button-color px-7 py-2'>See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;