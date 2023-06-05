import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='my-5 mb-20'>
            <div className='flex flex-col items-center justify-center space-y-6'>
                <div>
                    <img className='h-80 w-80 mx-auto' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=360&t=st=1684436051~exp=1684436651~hmac=d0237e4bacb9824584ca2426392dd793061f334be5e8a3aeedb50541585d11dd" alt="error_img" />

                    <p className='back text-5xl text-violet-600'>Sorry, the Page Not Found!</p>
                </div>

                <div>
                    <button>
                        <Link to='/' className='errorBack border border-violet-600 hover:bg-violet-600 hover:text-white font-semibold py-2 px-6 rounded'>Go Back to Home</Link>
                    </button>
            </div>
            </div>
        </div>

        
    );
};

export default Error;