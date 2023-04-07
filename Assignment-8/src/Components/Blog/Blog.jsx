import React from 'react';

const Blog = () => {
    return (
        <>
            <div className='w-10/12 mx-auto mt-7 md:mt-0'>
                <div>
                    <h1 className='text-xl font-bold'>Question 1: Props vs State:</h1>
                    <p><span className='font-semibold'>Props:</span> Props in ReactJs are used to send data to components. Props are used to pass data and methods from a parent component to a child component. Props cannot be modified, read-only, and Immutable.</p>

                    <p><span className='font-semibold'>State:</span> The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
                </div>

                <div className='mt-7'>
                    <h1 className='text-xl font-bold'>Question 2: How does useState work?</h1>

                    <p>useState() hook to update, manage and manipulate states inside functional components without converting them to class components. useState() in React Js is an internal method called inside function components to create a state associated with each component. While the state of a class is always an object, hooks can have any state.</p>
                </div>

                <div className='mt-7'>
                    <h1 className='text-xl font-bold mt-7'>Question 3: Purpose of useEffect other than fetching data.</h1>
                    <p>The useEffect hook in React.js is used to handle side effects in functional components. A side effect is any operation that affects something outside of the component, such as fetching data, updating the DOM.</p>
                </div>

                <div className='mt-7 pb-7'>
                    <h1 className="text-xl font-bold">How Does React work?</h1>
                    <p>React internally maintains a virtual Dom. If something is changed or modified, then it compares the change with its virtual dom. By comparing, he will chnage anywhere with Diff algorithm. And he updates the actual dom by going to the minimum that needs to be chnage.</p>
                </div>

            </div>
        </>
    );
};

export default Blog;