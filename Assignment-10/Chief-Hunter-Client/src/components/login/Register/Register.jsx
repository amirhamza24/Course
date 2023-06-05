import React, { useContext, useState } from 'react';
import './Register.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from "sweetalert2";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegistration = ((event) => {
        event.preventDefault();

        console.log(email, name, password, photo);

        if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            setError("***Password minimum 6 characters long, at least one letter and one number***");
            return;
        }

        if(name, email, photo, password) {
            createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
                Swal.fire(
                    "Success!",
                    "Registration Successful!",
                    "success"
                  );
            })
            .catch(error => {
                console.log(error);
            })
        }
    });


    return (
        <div>
            <div className='login flex justify-center'>
                <div className='w-11/12 md:w-6/12 lg:w-3/12'>
                    <h1 className='text-3xl md:text-4xl my-10 text-slate-800 font-bold'>Please Register!</h1>

                    <div>
                        <form className=' bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 space-y-4' action="">
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                    Enter Name
                                </label>

                                <input onChange={(e) => setName(e.target.value)} className=" shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Your Name" required />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                    Enter Email
                                </label>

                                <input onChange={(e) => setEmail(e.target.value)} className=" shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="example@gmail.com" required />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                    Photo URL
                                </label>

                                <input onChange={(e) => setPhoto(e.target.value)} className=" shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="photo" type="text" placeholder="Photo URL" required />
                            </div>

                            <div className="mt-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                            
                                <input onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password" required />

                                
                                <small className='text-red-600'>{error}</small>
                            </div>

                            <div className="flex justify-center my-3">
                                <button className="bg-orange-500 w-full hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleRegistration} type="button">
                                    Register
                                </button>   
                            </div>

                            <div>
                                <p><small>Already have an account? <Link className='text-blue-700 hover:underline' to='/login'>Please Login</Link></small></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;