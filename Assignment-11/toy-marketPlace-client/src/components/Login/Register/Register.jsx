import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import UseTitle from "../../../Hooks/UseTitle";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    // useTitle use for dynamic Title
    UseTitle('Register')

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);

        setError('');
        if(password.length < 6) {
            setError('Password must be 6 characters Long')
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate(from, { replace: true });
            form.reset();
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

    return (
        <div>
            <div className="w-11/12 md:w-6/12 mx-auto text-center p-5 my-10 shadow-xl">
                <h1 className="text-4xl font-bold">Create Account</h1>
                <p className="w-72 mx-auto border-dotted border-b-2 mt-3 border-gray-400"></p>

                <div>
                    <form onSubmit={handleLogin}>
                        <div className="w-11/12 md:w-9/12 mx-auto mt-8 space-y-4">
                            <div className="form-control space-y-2">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">
                                        Enter Name
                                    </p>
                                </label>

                                <input type="text" name="name" placeholder="Enter Your Name" className="w-full px-4 py-2 focus:outline-none border rounded" required/>
                            </div>

                            <div className="form-control space-y-2">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">
                                        Enter Email
                                    </p>
                                </label>

                                <input type="email" name="email" placeholder="example@gmail.com" className="w-full px-4 py-2 focus:outline-none border rounded" required/>
                            </div>

                            <div className="form-control space-y-2">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">
                                        Photo URL
                                    </p>
                                </label>

                                <input type="text" name="photo" placeholder="Photo URL" className="w-full px-4 py-2 focus:outline-none border rounded" required/>
                            </div>

                            <div className="form-control space-y-2">
                                <label htmlFor="label">
                                    <p className="text-left font-semibold">
                                        Enter password:
                                    </p>
                                </label>

                                <input type="password" name="password" placeholder="Enter Password" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                            </div>

                            <div>
                                <p className="text-red-500 text-left">{error}</p>
                            </div>

                            <div className="form-control">
                                <input type="submit" value="Register" className='w-full h-10 bg-teal-400 hover:bg-teal-300 text-xl font-semibold cursor-pointer' />
                            </div>

                            <div>
                                <p className="">
                                    Already Have an Account? <Link className="text-blue-600 hover:underline" to="/login">Please Login.</Link>
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
