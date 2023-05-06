import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className=''>
            {/* Header section */}
            <div className='relative flex justify-between items-center'>
                <div>
                    <Link to="/">
                        <h2 className='text-2xl font-bold cursor-pointer'>JobHub</h2>
                    </Link>
                </div>

                <nav className='font-semibold text-gray-500'>
                    <ul className='lg:flex items-center hidden'>
                        <li className='lg:mr-6'>
                            <NavLink 
                                className={({ isActive }) => (isActive ? 'text-violet-600' : '')} 
                                to="/"
                                >
                                    Home
                            </NavLink>
                        </li>

                        <li className='lg:mr-6'>
                            <NavLink 
                                className={({ isActive }) => (isActive ? 'text-violet-600' : '')} 
                                to="/statistics"
                                >
                                    Statistics
                            </NavLink>
                        </li>

                        <li className='lg:mr-6'>
                            <NavLink 
                                className={({ isActive }) => (isActive ? 'text-violet-600' : '')} 
                                to="/appliedJobs"
                                >
                                    Applied Jobs
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                className={({ isActive }) => (isActive ? 'text-violet-600' : '')} 
                                to="/blog"
                                >
                                    Blog
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className='hidden lg:flex'>
                    <button className='btn bg-purple-500 py-3 px-6 rounded text-white font-semibold hover:bg-purple-600'>Start Applying</button>
                </div>

                <div className='lg:hidden z-10'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setMenuOpen(true)}
                        >
                            <Bars3Icon className='w-5 text-gray-600' />
                    </button>


                    {menuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='bg-white p-5 border rounded shadow-sm'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <Link to="/">
                                            <h2 className='text-2xl font-bold cursor-pointer'>JobHub</h2>
                                        </Link>
                                    </div>

                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setMenuOpen(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>



                                <nav className='mt-3'>
                                    <ul className='font-semibold text-gray-500 space-y-4'>
                                        <li>
                                            <Link to="/" className='hover:text-violet-600'>
                                                Home
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/statistics" className='hover:text-violet-600'>
                                                Statistics
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/appliedJobs" className='hover:text-violet-600'>
                                                Applied Jobs
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/blog" className='hover:text-violet-600'>
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </nav> 
                            </div>
                        </div>    
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;

// w-10/12 py-5 mx-auto