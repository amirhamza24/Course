import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
import { BiHide, BiShow } from "react-icons/Bi";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
            Swal.fire({
                title: 'Login Successful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
            })
        })
        .catch(error => {
            console.log(error);
            setError('Incorrect Email or Password');
        })
    }

    // const handleGoogleSign = () => {
    //     googleSign()
    //     .then(result => {
    //         console.log(result.user)
    //         navigate(from, { replace: true });
    //         Swal.fire(
    //             "Success!",
    //             "Login Successful.",
    //             "success"
    //         );
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         Swal.fire(
    //             "Oops!",
    //             "Something went wrong!",
    //             "error"
    //         );
    //     })
    // }

    return (

        
        <div className=" bg-gray-100 py-10">
            <div className="w-11/12 md:w-6/12 mx-auto text-center p-5 shadow-xl text-style bg-white">
                <h1 className="text-4xl font-bold">Please Login</h1>

                <div>
                    <form onSubmit={handleLogin}>
                        <div className="w-11/12 md:w-9/12 mx-auto mt-8 space-y-4">

                            <div className="space-y-2">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">
                                        Enter Email:
                                    </p>
                                </label>

                                <input type="email" name="email" placeholder="example@gmail.com" className="w-full px-4 py-2 focus:outline-none  border rounded" required />
                            </div>

                            <div className="space-y-2 relative">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">
                                        Enter password:
                                    </p>
                                </label>

                                <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="w-full px-4 py-2  focus:outline-none border rounded" required />

                                <span onClick={() => setShowPassword(!showPassword)} className="text-left text-lg cursor-pointer absolute top-9 right-5">
                                    {
                                        showPassword ? <BiHide></BiHide> : <BiShow></BiShow>
                                    }
                                </span>

                                <div className="text-left text-sm">
                                    <p className="text-red-500">{error}</p>
                                </div>
                            </div>

                            <div className="form-control">
                                <input type="submit" value="Login" className="w-full h-10 bg-lime-400 hover:bg-lime-300 text-xl font-semibold cursor-pointer" />
                            </div>

                            <div className="flex items-center my-6 gap-3">
                                <span className="grow w-full h-[1px] bg-gray-300"></span>
                                <span className="grow-0 font-semibold">Or</span>
                                <span className="grow mr-auto w-full h-[1px] bg-gray-300"></span>
                            </div>

                            {/* <div className="">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="flex items-center justify-center space-x-2 border hover:text-white hover:bg-blue-600 cursor-pointer w-3/5 md:w-2/5 mx-auto h-10 text-xl" onClick={handleGoogleSign}>
                                        <FaGoogle></FaGoogle>
                                        <p className="font-semibold">Google</p>
                                    </div>
                                </div>
                            </div> */}

                            <SocialLogin></SocialLogin>

                            <div>
                                <p className="">
                                    Are you new here?{" "}
                                    <Link className="text-blue-700 hover:underline" to="/register" >
                                        Please Register.
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
