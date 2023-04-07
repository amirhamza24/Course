import React from 'react';
import './ShowTime.css'

const ShowTime = ({time}) => {
    // const {timing} = props
    // console.log(time);

    let totalTiming = 0;
    for(const singleTime of time) {
        // console.log(singleValue);
        totalTiming = totalTiming + singleTime.read_time;
    }

    return (
        <div>
            <div className='bg-purple-200 px-10 py-5 border border-purple-700 rounded-lg'>
                <h3 className='text-center font-bold text-purple-700'>Spent time on: {totalTiming} min</h3>
            </div>
        </div>
    );
};

export default ShowTime;