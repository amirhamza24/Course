import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { logInUser, auth, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("Login page location", location);

    const from = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        console.log(email, password);

        if(email, password) {
            logInUser(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(from, { replace: true })
                Swal.fire(
                    "Success!",
                    "Login Successful.",
                    "success"
                );
            })
            .catch(error => {
                console.log(error);
                setError("Incorrect Email or Password");
            })
        }
    }


    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true })
            Swal.fire(
                "Success!",
                "Login Successful!",
                "success"
            );
        })
        .catch(error => {
            console.log(error.message);
            Swal.fire(
                "Oops!",
                "Something went wrong!",
                "error"
            );
        })
    }

    
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true })
            Swal.fire(
                "Success!",
                "Login Successful!",
                "success"
            );
        })
    }



    return (
        <div className='login flex justify-center'>
            <div className='w-11/12 md:w-6/12 lg:w-3/12'>
                <h1 className=' text-3xl md:text-4xl my-10 text-slate-800 font-bold'>Please Login!</h1>

                <div>
                    <form className=' bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4' action="">
                        
                        <div>
                            <p className='text-red-500'>{error}</p>
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-semibold my-2" htmlFor="email">
                                Enter Email
                            </label>

                            <input onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="example@gmail.com" />
                        </div>


                        <div className="my-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            
                            <input onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password" />

                            <p className="text-red-500 text-xs">Forget Password?</p>
                        </div>

                        <div className="flex justify-center my-3">
                            <button onClick={handleLogin} className="bg-orange-500 w-full hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Login
                            </button>

                            <ToastContainer />   
                        </div>

                        <div>
                            <p><small>Don't have an account? <Link className='text-blue-700 hover:underline' to='/register'>Register Here</Link></small></p>
                        </div>

                        <div className='mt-4'>
                            <div className='space-y-2'>
                                <div className='border border-gray-400 w-10/12 py-2 hover:bg-blue-600 hover:text-white flex items-center justify-center space-x-2 cursor-pointer'>
                                    <Link onClick={handleGoogleLogin}>
                                        <button className='flex items-center justify-center space-x-2'>
                                            <FaGoogle></FaGoogle> 
                                            <p>Log in with Google</p>
                                        </button>
                                    </Link>
                                </div>

                                <div className='border border-gray-400 w-10/12 py-2 hover:bg-gray-700 hover:text-white flex items-center justify-center space-x-2 cursor-pointer'>
                                    <Link onClick={handleGithubLogin}>
                                        <button className='flex items-center justify-center space-x-2'>
                                            <FaGithub></FaGithub> 
                                            <p>Log in with GitHub</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;