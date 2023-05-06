import React from 'react';

const Blog = () => {
    return (
        <div className='mt-16 space-y-6'>
            <div className='text-gray-600'>
                <p className='font-semibold text-gray-900 text-lg'>Question 1: When should you use context API?</p>
                <p>The Context API is used in React when you want to pass data down to child components without having to pass props through every level of the component tree. It provides a way to share data between components without having to use prop drilling, which can make your code more concise and easier to maintain.</p>
            </div>

            <div className='text-gray-600'>
                <p className='font-semibold text-gray-900 text-lg'>Question 2: What is custom hook?</p>
                <p>A custom hook is a reusable function in React that allows you to encapsulate and share stateful logic between components. Custom hooks provide a way to extract common code that is used across multiple components into a single, reusable function.</p>
            </div>

            <div className='text-gray-600'>
                <p className='font-semibold text-gray-900 text-lg'>Question 3: What is useRef?</p>
                <p>useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined.</p>
            </div>

            <div className='text-gray-600'>
                <p className='font-semibold text-gray-900 text-lg'>Question 4: What is useMemo?</p>
                <p>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed. </p>
            </div>
        </div>
    );
};

export default Blog;