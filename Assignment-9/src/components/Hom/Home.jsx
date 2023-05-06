import React, { useEffect, useState } from "react";
import "./Home.css";
import image from "../../../public/assets/All Images/P3OLGJ1 copy 1.png";
import JobCategory from "../JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Home = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [jobsData, setJobsData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    }

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("categoryData.json");
            const value = await res.json();
            // console.log(value);
            setCategoryData(value);
        };
        loadData();
    }, []);

    useEffect(() => {
        const loadJobData = async () => {
            const resData = await fetch("/jobData.json");
            const dataJob = await resData.json();
            setJobsData(dataJob);
        };
        loadJobData();
    }, []);

    return (
        //Header banner section start
        <div>
            <div className="flex items-center lg:justify-between mt-10 flex-col lg:flex-row">
                {/* home info */}
                <div className="lg:w-2/5 w-full">
                    <h1 className="text-5xl md:text-6xl font-bold home-title">
                        One Step Closer To Your <span className="text-violet-500">Dream Job</span>
                    </h1>

                    <p className="my-5 text-gray-500 text-sm">
                        Explore thousands of job opportunities with all the
                        information you need. Its your future. Come find it.
                        Manage all your job application from start to finish.
                    </p>

                    <div>
                        <button className="btn bg-purple-500 py-2 px-6 rounded text-white font-semibold hover:bg-purple-600">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* home img */}
                <div className="">
                    <img className="home-img" src={image} alt="" />
                </div>
            </div>


            {/* job category section start */}
            <div className="mt-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Job Category List</h1>
                    <p className="text-gray-500 text-sm mt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                    {
                        categoryData.map(cData => {
                            // console.log(cData);
                            return <JobCategory
                                key={cData.id} 
                                cData={cData}
                            ></JobCategory>
                        })
                    }
                </div>
            </div>


            {/* featured section */}
            <div className="mt-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Featured Jobs</h1>
                    <p className="text-gray-500 text-sm mt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {
                        jobsData.slice(0, showAll ? 6 : 4).map((jData) => (
                            <FeaturedJob
                                key={jData.id}
                                jData={jData}
                            ></FeaturedJob>
                        ))
                    }
                </div>
            </div>
            <span onClick={handleShowAll} className='flex justify-center mt-4'>
                <button className="btn bg-purple-500 py-2 px-6 rounded text-white font-semibold hover:bg-purple-600">
                    Show All
                </button>
            </span>
        </div>
    );
};

export default Home;
