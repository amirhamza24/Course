import React from 'react';
import './BlogPage.css'

const BlogPage = () => {
    return (
        <div>
            <div className='w-10/12 lg:w-8/12 mx-auto my-10 fontFamily'>
                <div className='space-y-12'>
                    <div className='border px-5 lg:py-4 shadow-lg lg:h-64 flex items-center'>
                        <div className='space-y-8'>
                            <div className='flex flex-col md:flex-row space-x-7'>
                                <div className=''>
                                    <p className='text-sky-600 w-32 text-lg font-semibold'>Question-1 :</p>
                                </div>

                                <p className='text-lg text-gray-700'>Tell us the differences between uncontrolled and controlled components?</p>
                            </div>

                            <div className='flex flex-col md:flex-row space-x-7'>
                                <div className='w-32'>
                                    <p className='text-purple-700 w-32 text-lg font-semibold'>Answer :</p>
                                </div>

                                <p className='text-lg text-gray-700'><span className='font-semibold underline italic'>Uncontrolled</span> The component state is managed internally by the DOM. <span className='font-semibold underline italic'> Controlled</span> The component state is managed by the React component itself, rather than the DOM.</p>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-8 border px-5 py-4 shadow-lg lg:h-64 flex items-center'>
                        <div className='space-y-8'>
                            <div className='flex flex-col md:flex-row space-x-7'>
                                <div className=''>
                                    <p className='text-sky-600 w-32 text-lg font-semibold'>Question-2 :</p>
                                </div>

                                <p className='text-lg text-gray-700'>How to validate React props using PropTypes?</p>
                            </div>

                            <div className='flex flex-col md:flex-row space-x-7'>
                                <div className='w-32'>
                                    <p className='text-purple-700 w-32 text-lg font-semibold'>Answer :</p>
                                </div>

                                <p className='text-lg text-gray-700'>Add a propTypes object to your component class, with keys for each prop and their corresponding PropTypes. When a prop fails validation, React will log a warning in the console. You can also customize the error message by adding a propType message to your PropTypes.</p>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-8 border px-5 py-4 shadow-lg lg:h-64 flex items-center'>
                        <div className='space-y-8'>
                            <div className='flex flex-col md:flex-row space-x-7'>
                                <div className=''>
                                    <p className='text-sky-600 w-32 text-lg font-semibold'>Question-3 :</p>
                                </div>

                                <p className='text-lg text-gray-700'>Tell us the difference between nodejs and express js?</p>
                            </div>

                            <div className='flex flex-col md:flex-row space-x-7'>
                                <div className='w-32'>
                                    <p className='text-purple-700 w-32 text-lg font-semibold'>Answer :</p>
                                </div>

                                <p className='text-lg text-gray-700'><span className='font-semibold underline italic'>Node js</span> is a runtime environment for executing JavaScript code outside of a browser. <span className='font-semibold underline italic'> Express js</span> is a web framework built on top of Node.js for building web applications.</p>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-8 border px-5 py-4 shadow-lg lg:h-64 flex items-center'>
                        <div className='space-y-8'>
                            <div className='flex flex-col md:flex-row space-x-7'>
                                <div className=''>
                                    <p className='text-sky-600 w-32 text-lg font-semibold'>Question-4 :</p>
                                </div>

                                <p className='text-lg text-gray-700'>What is a custom hook, and why will you create a custom hook?</p>
                            </div>

                            <div className='flex flex-col md:flex-row space-x-7'>
                                <div className='w-32'>
                                    <p className='text-purple-700 w-32 text-lg font-semibold'>Answer :</p>
                                </div>

                                <p className='text-lg text-gray-700'>A custom hook is a JavaScript function that uses built-in React hooks to create reusable logic that can be shared across multiple components. Developers create custom hooks to abstract away complex logic from components and to promote code reusability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;