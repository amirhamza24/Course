import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='w-10/12 mx-auto flex md:flex-row flex-col md:justify-between items-center text'>
                <h1 className='text-4xl md:text-3xl mb-5 md:mb-0 font-bold'>Team Limitless</h1>

                <nav className='font-semibold flex flex-col md:flex-row items-center'>
                    <a className='my-3 md:my-0 ml-0 md:ml-8' href="/home">Home</a>
                    <a className='my-3 md:my-0 ml-0 md:ml-8' href="/blog">Blog</a>
                    <a className='my-3 md:my-0 ml-0 md:ml-8' href="/contactus">Contact Us</a>
                    <a className='my-3 md:my-0 ml-0 md:ml-8' href="/login">Login</a>
                    <img className='w-10 rounded-full ml-0 md:ml-8 my-4 md:my-0 cursor-pointer' src="https://plus.unsplash.com/premium_photo-1661414561433-cfeffc4430da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                </nav>
            </div>
        </div>
    );
};

export default Header;