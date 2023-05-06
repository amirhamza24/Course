import React from "react";
import './JobCategory.css'

const JobCategory = ({ cData }) => {
    const { id, logo, title, job } = cData;
    return (
        <div className="bg-violet-100 pl-8 py-8 rounded-lg">
            <img className="bg-violet-200 p-3 rounded mb-8" src={logo} alt="" />
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-gray-500 mt-2">{job}</p>
        </div>
    );
};

export default JobCategory;
