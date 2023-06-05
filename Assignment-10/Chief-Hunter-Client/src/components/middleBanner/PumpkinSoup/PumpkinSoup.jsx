import React from 'react';
import soupImg from '../../../assets/soup.jpg'
import './PumpkinSoup.css'

const PumpkinSoup = () => {
    return (
        <div className='font-all'>
            <div className='my-16 bg-gray-100'>
                <div className='w-10/12 mx-auto py-14'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                        <div className='w-full md:w-5/12 space-y-7'>
                            <h2 className='text-3xl md:text-4xl text-gray-800 font-semibold'>Fresh and local perfect <br /> food for you</h2>

                            <hr className='border-4 w-32 border-cyan-300' />

                            <p className='text-gray-400 info'>
                                This kitchen is a brewery of life – whether it’s the kids baking parties or their parents elaborate soirees, there’s always something cooking in here.
                            </p>

                            <button className='button-color px-7 py-2'>See More</button>
                        </div>

                        <div className='w-full md:w-5/12'>
                            <div className=''>
                                <img className='imgSoup' src={soupImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PumpkinSoup;