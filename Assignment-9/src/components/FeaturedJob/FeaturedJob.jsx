import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const FeaturedJob = ({jData}) => {
    // console.log(jData);

    const {id, salary, location, picture, name, category, jobType, jobTime } = jData;

    return (
        <div className='border px-7 py-6 rounded'>
            <img className='w-24 h-7 mb-4' src={picture} alt="" />
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-gray-600'>{category}</p>

            <div className='my-3'>
                <button className='border border-purple-400 rounded text-purple-600 hover:text-purple-800 font-semibold px-3 py-1 mr-3'>{jobType}</button>
                <button className='border border-purple-400 rounded text-purple-600 hover:text-purple-800 font-semibold mt-3 md-mt-0 px-3 py-1 mr-3'>{jobTime}</button>
            </div>

            <div className='flex flex-col md:flex-row mb-3 text-gray-500'>
                <p className='flex items-center mr-7 text-sm'>
                    <MapPinIcon className="h-4 w-4 text-gray-500 mr-1" /> 
                    {location}
                </p>

                <p className='flex items-center text-sm'>
                    <CurrencyDollarIcon className="h-4 w-4 text-gray-500 mr-1" /> 
                    Salary: {salary}
                </p>
            </div>

            <Link to={`jobDetails/${id}`}>
                <button className="btn bg-purple-500 py-2 px-6 rounded text-white font-semibold hover:bg-purple-600">View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedJob;