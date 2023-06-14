import "./Scroll.css";

const Scroll = () => {
    return (
        <div>
            <div className="my-16">
                <div className="scroll-img flex items-center justify-center md:justify-start">
                    <div className="w-full md:w-8/12 mx-auto">
                        <div className="w-full md:w-96 space-y-6 text-center md:text-left">
                            <h1 className="text-3xl md:text-7xl font-bold pb-0 md:pb-5">
                                Lets Play Together
                            </h1>

                            <p className="text-gray-700">
                                Contact us today and get a free consultation on
                                any product we offer. Join our community for
                                updates.
                            </p>

                            <button className="bg-violet-600 hover:bg-violet-700 py-2 px-7 text-white text-lg font-semibold">
                                <h2>Join With Us</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scroll;
