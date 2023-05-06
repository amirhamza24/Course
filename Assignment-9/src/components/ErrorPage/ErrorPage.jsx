import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-900">
                        <span className="sr-only">Error</span> {status || 404}
                    </h2>
                    <h3 className="text-6xl mb-4 font-bold">Page Not Found!!!</h3>
                    <p className="text-2xl font-semibold md:text-3xl mb-8">
                        {error?.message}
                    </p>
                    <Link
                        to="/"
                        className="px-8 py-3 font-semibold rounded text-gray-100 hover:bg-purple-500 bg-purple-600"
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
