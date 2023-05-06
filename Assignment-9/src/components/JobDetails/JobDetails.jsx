import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import topImg from '../../../public/assets/All Images/Vector-1.png'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, CurrencyDollarIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../utilities/fakeDb';
import toast, { Toaster } from 'react-hot-toast';

const JobDetails = () => {
    const [details, setDetails] = useState({})
    const { id } = useParams()

    // console.log(id);

    const handleClick = () => {
        toast.success('Applied Successfull.');
    }

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('/jobData.json')
            const data = await res.json();
            const detail = data?.find(detailJob => detailJob.id === id);
            setDetails(detail)
        }
        getData()
    }, [])

    const handleAddToCart = id => {
        addToDb(id);
    }
    
    return (
        <div>
            <div>
                <img className='absolute top-0 right-0 w-60' src={topImg} alt="" />
            </div>

            <div className='text-center my-20'>
                <h2 className='text-4xl font-bold text-gray-800'>Job Details</h2>
            </div>

            <div className='flex flex-col md:flex-row md:justify-between'>
                <div className='w-11/12 md:w-7/12'>
                    <p><span className='text-normal font-bold text-black'>Job Description: </span><span className='text-gray-600 text-sm'>{details.description}</span></p>

                    <p className='my-5'><span className='text-normal font-bold text-black'>Job Responsibility: </span><span className='text-gray-600 text-sm'>{details.responsibility}</span></p>

                    <p className='my-5'><span className='text-normal font-bold text-black'>Educational Requirements: </span></p>
                    <p className='text-gray-600'>{details.requirements}</p>

                    <p className='my-5'><span className='text-normal font-bold text-black'>Experience: </span></p>
                    <p className='text-gray-600'>{details.experience}</p>
                </div>

                <div className='w-11/12 md:w-4/12 mt-5 md:mt-0'>
                    <div className='bg-violet-200 p-4 rounded-lg font-bold divide-y divide-purple-300'>
                        <div className='mb-3'>
                            <h4 className='text-gray-900'>Job Details:</h4>
                        </div>

                        <div className='py-5'>
                            <div className='flex items-center'>
                                <CurrencyDollarIcon className="h-4 w-4 text-violet-500 mr-1" />
                                <span className='text-sm text-gray-500 font-normal'><span className='text-gray-800 font-bold'>Salary: </span>{details.salary} (Per Month)</span>
                            </div>

                            <div className='flex items-center my-2'>
                                <CalendarDaysIcon className="h-4 w-4 text-violet-500 mr-1" />
                                <span className='text-sm text-gray-500 font-normal'><span className='text-gray-800 font-bold'>Job Title: </span>{details.jobTitle}</span>
                            </div>

                            <h2 className='text-gray-900 mt-5'>Contact Information</h2>
                        </div>

                        <div>
                            <div className='flex items-center pt-5'>
                                <PhoneIcon className="h-4 w-4 text-violet-500 mr-1" />
                                <span className='text-sm text-gray-500 font-normal'><span className='text-gray-800 font-bold'>Phone: </span>{details.phone}</span>
                            </div>

                            <div className='flex items-center my-2'>
                                <EnvelopeIcon className="h-4 w-4 text-violet-500 mr-1" />
                                <span className='text-sm text-gray-500 font-normal'><span className='text-gray-800 font-bold'>Email: </span>{details.email}</span>
                            </div>

                            <div className='flex items-center'>
                                <MapPinIcon className="h-4 w-4 text-violet-500 mr-1" />
                                <span className='text-sm text-gray-500 font-normal'><span className='text-gray-800 font-bold'>Address: </span>{details.address}</span>
                            </div>
                        </div>
                    </div>

                    <Link to="" onClick={() => handleAddToCart(details.id)}>
                        <div className='bg-violet-500 hover:bg-violet-600 mt-4 py-3 font-bold text-white text-center rounded-lg' onClick={handleClick}>
                            <button>
                                Apply Now
                            </button>
                            <Toaster />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;