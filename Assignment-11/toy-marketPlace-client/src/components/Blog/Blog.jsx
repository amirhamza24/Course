import UseTitle from '../../Hooks/UseTitle';
import './Blog.css'

const Blog = () => {

    UseTitle('Blog');

    return (
        <div className='bg-gray-100 py-10'>
        <div className='w-10/12 lg:w-8/12 mx-auto fontStyle text-sm'>
            <div className='space-y-12'>
                <div className='border px-5 lg:py-4 shadow-lg flex items-center bg-white'>
                    <div className='space-y-8'>
                        <div className='flex flex-col md:flex-row space-x-7'>
                            <div className=''>
                                <p className='text-sky-600 w-32 text-lg font-semibold'>Question-1 :</p>
                            </div>

                            <p className='text-lg text-gray-700 font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                        </div>

                        <div className='flex flex-col md:flex-row space-x-7'>
                            <div className='w-32'>
                                <p className='text-purple-700 w-32 text-lg font-semibold'>Answer :</p>
                            </div>

                            <div className="space-y-3">
                                <p className='text-gray-700'><span className='font-semibold'>Access Token:</span> When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources.</p>
                            
                                <p className='text-gray-700'><span className='font-semibold'>Refresh Token:</span> As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to Refresh the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.</p>

                                <div>
                                    <p className='font-semibold text-gray-700'>Here is how access tokens and refresh tokens work:</p>
                                    <p className='text-gray-700'>1. The user authenticates with the authorization server.</p>
                                    <p className='text-gray-700'>2. The client includes the access token in each request to access protected resources.</p>
                                    <p className='text-gray-700'>3. The client stores the access token in the browsers local storage or cookies.</p>
                                </div>
                                
                                <div>
                                    <p className='font-semibold text-gray-700'>Here are some storing access tokens and refresh tokens:</p>
                                    <p className='text-gray-700'>1. Store access tokens in the browsers local storage or cookies.</p>
                                    <p className='text-gray-700'>2. Encrypt access tokens and refresh tokens before storing them.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='space-y-8 border px-5 py-4 shadow-lg flex items-center bg-white'>
                    <div className='space-y-8'>
                        <div className='flex flex-col md:flex-row space-x-7'>
                            <div className=''>
                                <p className='text-sky-600 w-32 text-lg font-semibold'>Question-2 :</p>
                            </div>

                            <p className='text-lg text-gray-700 font-bold'>Compare SQL and NoSQL databases?</p>
                        </div>

                        <div className='flex flex-col md:flex-row space-x-7'>
                            <div className='w-32'>
                                <p className='text-purple-700 w-32 text-lg font-semibold'>Answer :</p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-gray-700"><span className="font-semibold">SQL:</span> SQL databases follow a rigid, structured data model based on tables, rows, and columns.SQL databases are generally vertically scalable. SQL databases excel at handling structured data with fixed schemas. SQL databases use SQL as the standard query language. SQL offers powerful querying capabilities with support for complex joins, aggregations, and filtering.</p>

                                <p className="text-gray-700"><span className="font-semibold">NoSQL:</span> NoSQL databases have a flexible, schema-less data model. NoSQL databases are designed to be horizontally scalable.NoSQL databases are more flexible in terms of data structure. They can handle unstructured or semi-structured data without requiring a predefined schema.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='space-y-8 border px-5 py-4 shadow-lg flex items-center bg-white'>
                    <div className='space-y-8'>
                        <div className='flex flex-col md:flex-row space-x-7'>
                            <div className=''>
                                <p className='text-sky-600 w-32 text-lg font-semibold'>Question-3 :</p>
                            </div>

                            <p className='text-lg text-gray-700 font-bold'>What is express js? What is Nest JS?</p>
                        </div>

                        <div className='flex flex-col md:flex-row space-x-7'>
                            <div className='w-32'>
                                <p className='text-purple-700 w-32 text-lg font-semibold'>Answer :</p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-gray-700"><span className="font-semibold">Express.js:</span> Express.js is a fast and minimalist web application framework for Node.js. It provides a robust set of features for building web applications and APIs. Express.js is unopinionated, which means it offers a great deal of flexibility and allows developers to have more control over their applications architecture. It focuses on simplicity, performance, and ease of use, making it a popular choice for building server-side applications and APIs in the Node.js ecosystem.</p>

                                <p className="text-gray-700"><span className="font-semibold">Nest.js:</span> Nest.js is a progressive and opinionated framework for building efficient and scalable server-side applications with Node.js. It combines the power of TypeScript, Object-Oriented Programming (OOP) principles, and the architectural patterns of Angular to provide a structured and maintainable development experience. Nest.js builds on top of Express.js and enhances it with additional features, abstractions, and architectural guidelines.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='space-y-8 border px-5 py-4 shadow-lg flex items-center bg-white'>
                    <div className='space-y-8'>
                        <div className='flex flex-col md:flex-row space-x-7'>
                            <div className=''>
                                <p className='text-sky-600 w-32 text-lg font-semibold'>Question-4 :</p>
                            </div>

                            <p className='text-lg text-gray-700 font-bold'>What is MongoDB aggregate and how does it work?</p>
                        </div>

                        <div className='flex flex-col md:flex-row space-x-7'>
                            <div className='w-32'>
                                <p className='text-purple-700 w-32 text-lg font-semibold'>Answer :</p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-gray-700"><span className="font-semibold">MongoDB Aggregation:</span> When working with a database management system, any time you want to retrieve data from the database you must execute an operation known as a query. However, queries only return the data that already exists in the database. In order to analyze your data to find patterns or other information about the data rather than the data itself you’ll often need to perform another kind of operation known as an aggregation.</p>

                                <p className="text-gray-700"><span className="font-semibold">Here how does it work:</span> MongoDB aggregate works by using a pipeline of stages. Each stage in the pipeline performs an operation on the data. The stages are processed in order, and the output from one stage is passed to the next stage. The final stage in the pipeline returns the results of the aggregation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Blog;