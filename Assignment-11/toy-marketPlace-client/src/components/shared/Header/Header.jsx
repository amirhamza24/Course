import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from '../../../assets/All/logo.png'
import { AuthContext } from "../../../provider/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const [ menuOpen, setMenuOpen ] = useState(false);
    const [activeButton, setActiveButton] = useState(5);

    const handleMenuButton = () => {
        setMenuOpen(!menuOpen);
    }

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    }

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error);
        })
    }

    const logInMenu = (
        <>
            <NavLink className={({isActive }) => isActive ? 'border-2 text-white py-1 px-2' : 'px-2' } to='/addToy'>
                Add Toy
            </NavLink>

            <NavLink className={({isActive }) => isActive ? 'border-2 text-white py-1 px-2' : 'px-2' } to='/myToys'>
                My Toys
            </NavLink>

            <p className='cursor-pointer' onClick={handleLogOut}>Logout</p>
        </>
    )

    return (
        <div>
            <div className="bg-[#76B5D5]">
                <div className="w-10/12 mx-auto py-4">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <Link to='/'>
                                <img src={logo} className="w-24 h-16" alt="" />
                            </Link>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:justify-center font-semibold text-xl space-x-5">
                            <NavLink className={({isActive }) => isActive ? 'border-2 text-white py-1 px-2' : 'px-2' } to='/'>
                                Home
                            </NavLink>

                            <NavLink className={({isActive }) => isActive ? 'border-2 text-white py-1 px-2' : 'px-2' } to='/blog'>
                                Blog
                            </NavLink>

                            <NavLink className={({isActive }) => isActive ? 'border-2 text-white py-1 px-2' : 'px-2' } to='/allToy'>
                                All Toys
                            </NavLink>

                            {
                                user ? logInMenu
                                : <div><Link to='/login'>Login</Link></div>
                            }

                            {
                                user && (
                                    <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                            <img src={user.photoURL} className="w-10 h-10 rounded-full" alt="user_img" />
                                    </div>
                                )
                            }
                        </div>


                        {/* Mobile Menu */}
                        <div className='lg:hidden z-10'>
                            <button aria-label='Open Menu' title='Open Menu' onClick={() => setMenuOpen(true)}>
                                <HiMenu onClick={handleMenuButton} className="text-2xl"></HiMenu>
                            </button>

                            {
                            menuOpen && (
                                <div className="absolute top-0 left-0 w-full z-10">
                                    <div className='bg-violet-600 p-5 border rounded shadow-sm'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <img className='h-16 w-24 cursor-pointer' src={logo} alt="" />
                                            </div>

                                            <div className='text-lg flex items-center space-x-4'>
                                                <div>
                                                    <button aria-label='Close Menu' title='Close Menu' onClick={() => setMenuOpen(false)}>
                                                        <HiX onClick={handleMenuButton} className="text-2xl"></HiX>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <nav>
                                            <ul className='font-semibold text-white space-y-4 mt-5 ml-4'>
                                                <li>
                                                    <Link onClick={() => handleClick(0)} className={activeButton === 0 ? 'border-2 text-white py-1 px-2' : 'px-2'} to='/'>Home</Link>
                                                </li>

                                                <li>
                                                    <Link onClick={() => handleClick(1)} className={activeButton === 1 ? 'border-2 text-white py-1 px-2' : 'px-2'} to='/blog'>Blog</Link>
                                                </li>

                                                <li>
                                                    <Link onClick={() => handleClick(2)} className={activeButton === 2 ? 'border-2 text-white py-1 px-2' : 'px-2'} to='/allToy'>All Toys</Link>
                                                </li>

                                                    {
                                                        user ? (
                                                            <>
                                                                <ul className="space-y-4">
                                                                    <li>
                                                                        <Link onClick={() => handleClick(3)} className={activeButton === 3 ? 'border-2 text-white py-1 px-2' : 'px-2'} to='/addToy'>Add Toy</Link>
                                                                    </li> 

                                                                    <li>
                                                                        <Link onClick={() => handleClick(4)} className={activeButton === 4 ? 'border-2 text-white py-1 px-2' : 'px-2'} to='/myToys'>My Toys</Link>
                                                                    </li>

                                                                    <li>
                                                                        <p className='cursor-pointer w-20 text-center h-8 border-2 border-gray-500' onClick={handleLogOut}>Logout</p>
                                                                    </li>
                                                                </ul>
                                                            </>
                                                        )
                                                        
                                                        : <Link to='/login' className="px-2">Login</Link>
                                                    }

                                                    {
                                                        user && (
                                                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                                                <img src={user.photoURL} className="w-10 h-10 rounded-full" alt="user_img" />
                                                            </div>
                                                    )}
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
        </div>
    );
};

export default Header;
