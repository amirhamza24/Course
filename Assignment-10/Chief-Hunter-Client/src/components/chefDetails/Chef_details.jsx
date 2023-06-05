import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Chef_details.css'
import { FaBookmark, FaHeart, FaRegCheckCircle, FaStar, FaStarHalf, FaUtensils } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Chef_details = () => {
    const chef = useLoaderData();
    const {chef_name, chef_picture, description, likes, total_recipe, experience, recipe1, recipe2, recipe3, ingredients, rating } = chef;

    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);

    const handleDisable1 = () => {
        setBtn1(true);
        toast("Successfully Added to Favourite.");
    }

    const handleDisable2 = () => {
        setBtn2(true);
        toast("Successfully Added to Favourite.");
    }

    const handleDisable3 = () => {
        setBtn3(true);
        toast("Successfully Added to Favourite.");
    }

    return (
        <div>
            <div className='w-10/12 mx-auto flex justify-center chefDetails'>
                <div className='mt-10'>
                    <div className='w-40 h-40 mx-auto border-4 border-orange-900 rounded-full border-spacing-2'>
                        <img className='w-full h-full rounded-full p-1' src={chef_picture} alt="" />
                    </div>
                
                    <div className='text-center'>
                        <h2 className='text-4xl text-gray-700 mt-4'>{chef_name}</h2>
                        <div className='md:w-5/12 mx-auto'>
                            <p className='text-gray-500 mt-2'>{description}</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                        <div className='border border-gray-300 px-5 py-4 rounded-tr-3xl rounded-bl-3xl shadow-lg'>
                            <p className='text-gray-500'>Total Likes</p>
                            <div className='flex justify-between mt-2'>
                                <p className='text-2xl text-blue-600 font-bold'>{likes}</p>
                                <FaHeart className='text-4xl text-orange-500'></FaHeart>
                            </div>
                        </div>

                        <div className='border border-gray-300 px-5 py-4 rounded-tr-3xl rounded-bl-3xl shadow-lg'>
                            <p className='text-gray-500'>Total Recipe</p>
                            <div className='flex justify-between mt-2'>
                                <p className='text-2xl text-red-600 font-bold'>0{total_recipe}</p>
                                <FaUtensils className='text-4xl text-blue-500'></FaUtensils>
                            </div>
                        </div>

                        <div className='border border-gray-300 px-5 py-4 rounded-tr-3xl rounded-bl-3xl shadow-lg'>
                            <p className='text-gray-500'>Experience</p>
                            <div className='flex justify-between mt-2'>
                                <p className='text-2xl text-violet-600 font-bold'>{experience} <small className='text-gray-500 font-normal text-normal'>Years</small></p>
                                <FaRegCheckCircle className='text-4xl text-green-700'></FaRegCheckCircle>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-10/12 mx-auto'>
                <div className='mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div className='border border-gray-300 rounded-lg shadow-lg'>
                            <div>
                                <img className='h-72 w-full' src={recipe1.recipe_img} alt="" />

                                <div className='px-4 py-4'>
                                    <div>
                                        <p className='text-gray-500 mb-2'>Recipe Name: <small className='text-orange-500 text-xl font-semibold'>{recipe1.recipe_name}</small></p>

                                        <p className='text-gray-500'>Ingredients:</p>

                                        {
                                            recipe1?.ingredients.map((i, index) => <p key={index} className='ml-4 text-gray-900 font-semibold'>{i}</p>)
                                        }
                                    </div>

                                    <div className='mt-2'>
                                        <p className='text-gray-600'>Cooking Method: <small className='text-xl font-bold text-blue-600'>{recipe1.cooking_method}</small></p>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-gray-600 mt-2'>Rating: </p>

                                            <div className='flex text-yellow-400 text-xl my-5'>
                                                <div className='flex mt-2'>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStarHalf></FaStarHalf></p>
                                                </div>
                                            
                                                <p className='text-gray-900 mt-1'>{rating}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div onClick={handleDisable1} disabled={btn1} className='w-full bg-orange-900 hover:bg-gray-900 text-white font-semibold py-3 text-center cursor-pointer flex items-center justify-center space-x-2'>
                                        <button className='uppercase'>Add to Favourite</button> <FaBookmark></FaBookmark>
                                        <ToastContainer />
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className='border border-gray-300 rounded-lg shadow-lg'>
                            <div>
                                <img className='h-72 w-full' src={recipe2.recipe_img} alt="" />

                                <div className='px-4 py-4'>
                                    <div>
                                        <p className='text-gray-500 mb-2'>Recipe Name: <small className='text-orange-500 text-xl font-semibold'>{recipe2.recipe_name}</small></p>

                                        <p className='text-gray-500'>Ingredients:</p>

                                        {
                                            recipe2?.ingredients.map((i, index) => <p key={index} className='ml-4 text-gray-900 font-semibold'>{i}</p>)
                                        }
                                    </div>

                                    <div className='mt-2'>
                                        <p className='text-gray-600'>Cooking Method: <small className='text-xl font-bold text-blue-600'>{recipe2.cooking_method}</small></p>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-gray-600 mt-2'>Rating: </p>

                                            <div className='flex text-yellow-400 text-xl my-5'>
                                                <div className='flex mt-2'>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStarHalf></FaStarHalf></p>
                                                </div>
                                            
                                                <p className='text-gray-900 mt-1'>{rating}</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='w-full bg-orange-900 hover:bg-gray-900 text-white font-semibold py-3 text-center cursor-pointer flex items-center justify-center space-x-2' onClick={handleDisable2} disabled={btn2}>
                                        <button className='uppercase'>Add to Favourite</button> <FaBookmark></FaBookmark>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='border border-gray-300 rounded-lg shadow-lg'>
                            <div>
                                <img className='h-72 w-full' src={recipe3.recipe_img} alt="" />

                                <div className='px-4 py-4'>
                                    <div>
                                        <p className='text-gray-500 mb-2'>Recipe Name: <small className='text-orange-500 text-xl font-semibold'>{recipe3.recipe_name}</small></p>

                                        <p className='text-gray-500'>Ingredients:</p>

                                        {
                                            recipe3?.ingredients.map((i, index) => <p key={index} className='ml-4 text-gray-900 font-semibold'>{i}</p>)
                                        }
                                    </div>

                                    <div className='mt-2'>
                                        <p className='text-gray-600'>Cooking Method: <small className='text-xl font-bold text-blue-600'>{recipe3.cooking_method}</small></p>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-gray-600 mt-2'>Rating: </p>

                                            <div className='flex text-yellow-400 text-xl my-5'>
                                                <div className='flex mt-2'>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStar></FaStar></p>
                                                    <p><FaStarHalf></FaStarHalf></p>
                                                </div>
                                            
                                                <p className='text-gray-900 mt-1'>{rating}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full bg-orange-900 hover:bg-gray-900 text-white font-semibold py-3 text-center cursor-pointer flex items-center justify-center space-x-2' onClick={handleDisable3} disabled={btn3}>
                                        <button className='uppercase'>Add to Favourite</button> <FaBookmark></FaBookmark>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef_details;