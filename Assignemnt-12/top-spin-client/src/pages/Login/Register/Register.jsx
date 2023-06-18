import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
// import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        console.log(data);

        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            updateUserProfile(data.name, data.photo)
            .then(() => {
                console.log('User Created Successfully');

                const saveUser = {name: data.name, email: data.email, role: "student", image: data.photo}

                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)

                })
                .then(res => res.json())
                .then( data => {
                    if(data.insertedId) {
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Registration Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true });
                    }
                })
            })
        })
    };

    // for google registration. use googleSign another components for registration that's can't use this function cause. 
    // const handleGoogleSign = () => {
    //     googleSign()
    //     .then(result => {
    //         console.log(result.user)
    //         navigate(from, { replace: true });
    //         Swal.fire(
    //             "Success!",
    //             "Registration Successful.",
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
        <div className="bg-gray-100 py-10">
            <div className="w-11/12 md:w-6/12 mx-auto text-center p-5 shadow-xl bg-white">
                <h1 className="text-4xl font-bold">Please Register</h1>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-11/12 md:w-9/12 mx-auto mt-8 space-y-4">
                            <div className="text-left">
                                <p className="text-red-500">{}</p>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">
                                        Enter Name:
                                    </p>
                                </label>

                                <input type="text" {...register("name", { required: true })} placeholder="Enter Name" className="w-full px-4 py-2 focus:outline-none border rounded" />

                                {errors.name && <div className="text-left text-sm"><span className="text-red-600">Name is required </span></div> }
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">
                                        Enter Email:
                                    </p>
                                </label>

                                <input type="email" {...register("email", { required: true })} placeholder="example@gmail.com" className="w-full px-4 py-2 focus:outline-none border rounded" />

                                {errors.email && <div className="text-left text-sm"><span className="text-red-600">Email is required </span></div> }
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">
                                        Enter password:
                                    </p>
                                </label>

                                <input type="password" {...register("password", { 
                                    required: true, 
                                    minLength: 6, 
                                    maxLength: 13,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="Enter Password" className="w-full px-4 py-2 focus:outline-none border rounded" />

                                {errors.password?.type === 'required' && <p className="text-red-600 text-left text-sm">Password is required</p> }
                                {errors.password?.type === 'minLength' && <p className="text-left text-sm text-red-600">Password must be 6 characters long</p> }
                                {errors.password?.type === 'maxlength' && <p className="text-red-600 text-left text-sm">Password must be less than 20 characters</p> }
                                {errors.password?.type === 'pattern' && <p className="text-red-600 text-left text-sm">Password must be one Uppercase, one lowercase, one number and one special character </p> }
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">
                                        Confirm password:
                                    </p>
                                </label>

                                <input type="password" {...register("confirm", { required: true })} placeholder="Confirm Password" className="w-full px-4 py-2 focus:outline-none border rounded" />

                                {errors.confirm && <div className="text-left text-sm"><span className="text-red-600">Confirm Password is required </span></div> }
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">
                                        Photo URL:
                                    </p>
                                </label>

                                <input type="text" {...register("photo", { required: true })} placeholder="Photo URl" className="w-full px-4 py-2 focus:outline-none border rounded" />

                                {errors.photo && <div className="text-left text-sm"><span className="text-red-600">Photo URL is required </span></div> }
                            </div>

                            <div className="form-control">
                                <input type="submit" value="Register" className="w-full h-10 bg-lime-400 hover:bg-lime-300 text-xl font-semibold cursor-pointer" />
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
                                    Already Have an Account?{" "}
                                    <Link className="text-blue-700 hover:underline" to="/login">
                                        Please Login.
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

export default Register;
