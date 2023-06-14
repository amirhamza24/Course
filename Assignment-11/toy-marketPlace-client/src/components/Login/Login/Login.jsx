
import { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from "sweetalert2";
import UseTitle from '../../../Hooks/UseTitle';

const Login = () => {

    const { signIn, googleSign, githubSign } = useContext(AuthContext);

    // useTitle use for dynamic title
    UseTitle('Login');

    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result => {
            console.log(result.user)
            navigate(from, { replace: true });
            Swal.fire(
                "Success!",
                "Login Successful.",
                "success"
            );
        })
        .catch(error => {
            console.log(error);
            setError('Incorrect Email or Password');
        })
    }

    
    const handleGoogleSign = () => {
        googleSign()
        .then(result => {
            console.log(result.user)
            navigate(from, { replace: true });
            Swal.fire(
                "Success!",
                "Login Successful.",
                "success"
            );
        })
        .catch(error => {
            console.log(error)
            Swal.fire(
                "Oops!",
                "Something went wrong!",
                "error"
            );
        })
    }

    const handleGithubSign = () => {
        githubSign()
        .then(result => {
            console.log(result.user)
            navigate(from, { replace: true });
            Swal.fire(
                "Success!",
                "Login Successful.",
                "success"
            );
        })
        .catch(error => {
            console.log(error)
            Swal.fire(
                "Oops!",
                "Something went wrong!",
                "error"
            );
        })
    }

    return (
        <div>
            <div className="w-11/12 md:w-6/12 mx-auto text-center p-5 my-10 shadow-xl">

                <h1 className="text-4xl font-bold">Login</h1>
                <p className="w-28 mx-auto border-dotted border-b-2 mt-3 border-gray-400"></p>

                <div>
                    <form onSubmit={handleLogin}>
                        <div className="w-11/12 md:w-9/12 mx-auto mt-8 space-y-4">

                            <div className='text-left'>
                                <p className='text-red-500'>{error}</p>
                            </div>

                            <div className="space-y-2">
                                 <label htmlFor="label">
                                    <p className="text-left font-semibold">Enter Email:</p>
                                </label>

                                <input type="email" name='email' placeholder="example@gmail.com" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">Enter password:</p>
                                </label>

                                <input type="password" name='password' placeholder="Enter Password" className="w-full px-4 py-2 focus:outline-none border rounded" required />

                                <p className="text-left text-sm text-red-500"><small>Forget Password?</small></p>
                            </div>

                            <div className="form-control">
                                <input type="submit" value="Login" className='w-full h-10 bg-teal-400 hover:bg-teal-300 text-xl font-semibold cursor-pointer' />
                            </div>

                            {/* <button className="w-full h-10 bg-teal-300 hover:bg-teal-400 text-xl font-semibold">
                                    Login
                            </button> */}
                            
                            <div className='flex items-center my-6 gap-3'>
                                <span className='grow w-full h-[1px] bg-gray-300'></span>
                                <span className='grow-0 font-semibold'>Or</span>
                                <span className='grow mr-auto w-full h-[1px] bg-gray-300'></span>
                            </div>

                            <div className=''>
                                <div className='flex flex-col md:flex-row items-center'>
                                    <div className='flex items-center justify-center space-x-2 border hover:border-gray-600 cursor-pointer w-3/5 md:w-2/5 mx-auto h-10 text-xl' onClick={handleGoogleSign}>
                                        <FaGoogle></FaGoogle>
                                        <p className='font-semibold text-gray-600'>Google</p>
                                    </div>

                                    <div className='flex items-center justify-center space-x-2 border hover:border-gray-600 cursor-pointer w-3/5 md:w-2/5 mx-auto h-10 text-xl' onClick={handleGithubSign}>
                                        <FaGithub></FaGithub>
                                        <p className='font-semibold text-gray-600'>Github</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className=''>Are you new here? <Link className='text-blue-600 hover:underline' to='/register'>Please Register.</Link></p>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;