import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../public/assets/Icons/Group 9969.png'

const Footer = () => {
    return (
        <div className='mt-16 w-full bg-black text-white'>
            <div className='w-10/12 mx-auto py-14 divide-y divide-gray-600'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pb-9 text-center md:text-left space-y-4 lg:space-y-0'>
                    <div className=''>
                        <Link to="/">
                            <h2 className='text-2xl font-bold cursor-pointer'>JobHub</h2>
                        </Link>

                        <p className='my-3 text-gray-400 text-sm'>
                            There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                        </p>

                        <img className='w-32 mx-auto cursor-pointer' src={img} alt="" />
                    </div>

                    <div className='lg:ml-8'>
                        <h3 className='text-xl font-semibold text-gray-200'>Company</h3>

                        <ul className='text-gray-400 font-normal space-y-2 mt-2 text-sm'>
                            <li>About Us</li>
                            <li>Work</li>
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold text-gray-200'>Product</h3>

                        <ul className='text-gray-400 font-normal space-y-2 mt-2 text-sm'>
                            <li>Prototype</li>
                            <li>Plans & Pricing</li>
                            <li>Customers</li>
                            <li>Integrations</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold text-gray-200'>Support</h3>

                        <ul className='text-gray-400 font-normal space-y-2 mt-2 text-sm'>
                            <li>Help Desk</li>
                            <li>Sales</li>
                            <li>Become a Partner</li>
                            <li>Developers</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className='text-xl font-semibold text-gray-200'>Contact</h3>

                        <ul className='text-gray-400 font-normal space-y-2 mt-2 text-sm'>
                            <li>Banani, Dhaka</li>
                            <li>423-5265-8342</li>
                        </ul>
                    </div>
                </div>

                <div className='pt-8 text-sm text-gray-400 flex flex-col md:flex-row text-center md:text-left md:justify-between space-y-2 md:space-y-0'>
                    <div className=''>
                        <p>&copy; <span className='font-bold'>Job Hub</span>, All Rights Reserved</p>
                    </div>

                    <div>
                        <p>Powered by <span className='font-bold'>Job Hub</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;