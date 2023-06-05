import React, { useEffect, useState } from 'react';
import './Home.css'
import { FaHeart, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Banner from '../banner/Banner';
import PumpkinSoup from '../middleBanner/PumpkinSoup/PumpkinSoup';
import SundayBranch from '../middleBanner/sundayBrunch/SundayBranch';

const Home = () => {

    const [chef, setChefs] = useState([]);

    useEffect( () => {
        fetch('https://chef-recipe-hunter-server-amirhamza24.vercel.app/chef')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Banner></Banner>

            <div className='w-10/12 mx-auto'>
                <h2 className='chef-title text-6xl font-semibold text-center mt-16 mb-8'>Our Special Chef</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    chef.map(singleChef => <div
                        key={singleChef.id} className='space-y-4 border border-gray-300 rounded-lg text-center shadow hover:shadow-xl'>

                        <div>
                            <div className=''> 
                                <img className='h-64 w-full rounded-t-lg' src={singleChef.chef_picture} alt="" />
                            </div>

                            <div className='px-7 py-5'>
                                <div>
                                    <h3 className='text-2xl font-semibold chef-name text-gray-700'>{singleChef.chef_name}</h3>

                                    <p className='text-gray-400 text-xs tracking-wide'>{singleChef.description}</p>

                                    <p className='chef-name experience text-slate-500 my-4'><span className='text-orange-500'>{singleChef.chef_name}</span> Have <span className='text-orange-500'>{singleChef.experience}</span> Years of Experience In <span>Bangladesh.</span></p>
                                </div>

                                <div className='flex md:flex-row flex-col justify-between items-center'>
                                    <div>
                                        <div className='flex items-center space-x-2'>
                                            <FaUtensils className='text-orange-500 text-lg'></FaUtensils>
                                            <span className='text-xl font-semibold text-blue-500'>{singleChef.total_recipe}</span>
                                            <p className='text-slate-500'>Recipe</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center space-x-2'>
                                        <FaHeart className='text-orange-500'></FaHeart>
                                        <span className='text-xl font-semibold text-blue-500'>{singleChef.likes}</span>
                                        <p className='text-slate-500'>Likes</p>
                                    </div>
                                </div>

                                <Link to={`/chef/${singleChef?.id}`}>
                                    <button className='button-color mt-6 mb-2 font-semibold px-7 py-2'>View Recipes</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
            </div>

            <PumpkinSoup></PumpkinSoup>

            <SundayBranch></SundayBranch>
        </div>
    );
};

export default Home;