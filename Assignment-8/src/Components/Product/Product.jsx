import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const { id, author_name, blog_title, read_time, blog_img, author_img, publish_date } = props.product;
    const bookmark = props.bookmark;
    const handleTime = props.handleTime;

    return (
        <div className='product'>
            <img className='banner-img -full' src={blog_img} alt="" />

            <div className='flex flex-col md:flex-row md:justify-between md:items-center mt-6'>
                <div className='flex items-center'>
                    <img className='author-img' src={author_img} alt="" />

                    <div className='ml-5'>
                        <h1 className='font-bold'>{author_name}</h1>
                        <h6 className='publish-date text-sm'>{publish_date}</h6>
                    </div>
                </div>

                <div className="read-time flex mt-5 md:mt-0">
                    <p className='publish-date'>{read_time} minutes read</p>
                    <span className='bookmark-icon' onClick={() => bookmark(props.product)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                    </span>
                     
                </div>
            </div>

            <h1 className='text-4xl font-bold my-6'>{blog_title}</h1>

            <div className='text-gray-500'>
                <span>#beginners</span>
                <span className='ml-5'>#programming</span>
            </div>
            
            <div className=' mt-4 mb-5 mark-button'>
                <span className='text-blue-800 font-semibold cursor-pointer' onClick={() => handleTime(props.product)}>Mark as read</span>

                {/* <button className='btn btn-primary font-bold' onClick={() => handleTime(props.product)}>Mark as read</button> */}
            </div>

            <hr className='border-line w-11/12 mx-auto'></hr>
        </div>

        
    );
};


{/* <FontAwesomeIcon icon={faBookmark} /> */}

export default Product;