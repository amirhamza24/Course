import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeButton, setActiveButton] = useState(2);

    const { user, logOut } = useContext(AuthContext);
    console.log(user?.email);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error);
        })
    }

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    }
    

    return (
        <div>
            <div>
            <div className='bg-stone-900 relative px-12 py-3 mx-auto flex justify-between items-center'>
                    <div>
                        <img className='h-16 rounded-full cursor-pointer' src={logo} alt="" />
                    </div>
                    
                    <div className="px-5">
                        <div className='lg:flex items-center font-semibold text-xl hidden space-x-8 text-white'>
                            <NavLink onClick={() => handleClick(0)} className={activeButton === 0 ? 'bg-orange-400 rounded-lg py-2 px-3' : ''}  to="/" >
                                Home
                            </NavLink>

                            <NavLink onClick={() => handleClick(1)} className={activeButton === 1 ? 'bg-orange-400 rounded-lg py-2 px-3' : ''}  to="/blogPage" >
                                Blog
                            </NavLink>
                        </div>
                    </div>

                    <div className='text-lg flex items-center space-x-4 text-white'>
                        { user && 
                            <div className='bg-zinc-500 p-2 rounded-full cursor-pointer'>
                                <FaUserAlt className='hover:userImpl.email'></FaUserAlt>
                            </div>
                        }

                        {
                            user?.email ? (
                                <p className='font-semibold cursor-pointer' onClick={handleLogOut}>Logout</p>
                            ) : (
                                <Link className='font-semibold' to='/login'>Login</Link>
                            )
                        }
                    </div>

                    <div className='lg:hidden z-10'>
                        <button aria-label='Open Menu' title='Open Menu' onClick={() => setMenuOpen(true)}>
                            <Bars3Icon className='w-5 text-white' />
                        </button>

                        {
                            menuOpen && (
                                <div className="absolute top-0 left-0 w-full z-10">
                                    <div className='bg-white p-5 border rounded shadow-sm'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <img className='h-20 rounded-full cursor-pointer' src={logo} alt="" />
                                            </div>

                                            <div className='text-lg flex items-center space-x-4'>
                                            { user && 
                                                <div className='bg-zinc-500 p-2 rounded-full cursor-pointer'>
                                                    <FaUserAlt className='hover:userImpl.email'></FaUserAlt>
                                                </div>
                                            }

                                                <div>
                                                {
                                                    user?.email ? (
                                                        <p className='font-semibold cursor-pointer' onClick={handleLogOut}>Logout</p>
                                                    ) : (
                                                        <Link className='font-semibold' to='/login'>Login</Link>
                                                    )
                                                }
                                                </div>

                                                <div>
                                                    <button aria-label='Close Menu' title='Close Menu' onClick={() => setMenuOpen(false)}>
                                                        <XMarkIcon className='w-5 text-gray-600' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <nav>
                                            <ul className='font-semibold text-gray-500 space-y-4 mt-5 ml-4'>
                                                <li>
                                                    <Link onClick={() => handleClick(0)} className={activeButton === 0 ? 'bg-orange-400 rounded-lg py-2 px-3' : ''} to='/'>Home</Link>
                                                </li>

                                                <li>
                                                    <Link onClick={() => handleClick(1)} className={activeButton === 1 ? 'bg-orange-400 rounded-lg py-2 px-3' : ''} to='/blogPage'>Blog</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                        
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Header;