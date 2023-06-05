import React from 'react';
import './Footer.css'
import logo from '../../assets/logo.jpg'
import { FaFacebookF, FaForward, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-neutral-800'>
            <div className='w-10/12 mx-auto py-16 text-white fontFamily'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left gap-10'>
                    <div className='space-y-3'>
                        <div className='flex justify-center md:justify-start'>
                            <img className='rounded-full h-16' src={logo} alt="" />
                        </div>
                        <h2 className='text-2xl font-semibold'>Chef's Place</h2>
                        <p className='text-gray-400 text-sm'>This kitchen is a brewery of life – whether it’s the kids baking parties or their parents elaborate soirees, there’s always something cooking in here.</p>

                        <div className='flex justify-center md:justify-start space-x-4 text-gray-400 pt-3'>
                            <FaFacebookF className='hover:text-white cursor-pointer'></FaFacebookF>
                            <FaTwitter className='hover:text-white cursor-pointer'></FaTwitter>
                            <FaInstagram className='hover:text-white cursor-pointer'></FaInstagram>
                            <FaYoutube className='hover:text-white cursor-pointer'></FaYoutube>
                        </div>
                    </div>

                    <div className='space-y-6 ml-0 md:ml-10'>
                        <h3 className='text-xl font-semibold'>Company</h3>

                        <div className='flex justify-center md:justify-start'>
                            <div className='space-y-3 text-gray-400 text-sm'>
                                <p className='flex items-center hover:text-white hover:ml-2 hover:underline hover:ease-in-out duration-300'><FaForward className='mr-2'></FaForward> About Us</p>
                                <p className='flex items-center hover:text-white hover:pl-2 hover:underline hover:ease-in-out duration-300'><FaForward className='mr-2'></FaForward> Privacy Policy</p>
                                <p className='flex items-center hover:text-white hover:pl-2 hover:underline hover:ease-in-out duration-300'><FaForward className='mr-2'></FaForward> Blogs</p>
                                <p className='flex items-center hover:text-white hover:pl-2 hover:underline hover:ease-in-out duration-300'><FaForward className='mr-2'></FaForward> Gift Vouchers</p>
                                <p className='flex items-center hover:text-white hover:pl-2 hover:underline hover:ease-in-out duration-300'><FaForward className='mr-2'></FaForward> Our Story</p>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <h3 className='text-xl font-semibold'>Working Time</h3>

                        <ul className='space-y-3 text-gray-400 text-sm'>
                            <li>Monday 10:00 am to 11:00 pm</li>
                            <li>Tuesday 10:00 am to 11:00 pm</li>
                            <li>Wednesday 10:00 am to 11:00 pm</li>
                            <li>Thursday 10:00 am to 11:00 pm</li>
                            <li>Friday 11:00 am to 12:00 am</li>
                            <li>Saturday 10:00 am to 11:00 pm</li>
                            <li>Sunday OffDay</li>
                        </ul>
                    </div>

                    <div className='space-y-6'>
                        <h3 className='text-xl font-semibold'>Reservations</h3>

                        <div className='space-y-3 text-gray-400 text-sm'>
                            <p>
                                Our support available to help you 24 hours a day, seven days a week.
                            </p>

                            <p>Please Call: +880 1620 *** ***</p>

                            <p>For more information: example@gmail.com</p>
                        </div>
                    </div>
                </div>

                <hr className='border-1 border-gray-600 my-8' />

                <div className='pt-3 text-sm text-gray-500 flex flex-col md:flex-row md:justify-between text-center md:text-left space-y-2 md:space-y-0'>
                    <div className=''>
                        <p>&copy; <span className='font-bold'>Chef's Place</span>, All Rights Reserved</p>
                    </div>

                    <div>
                        <p>Powered by <span className='font-bold'>Chef's Place</span></p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;