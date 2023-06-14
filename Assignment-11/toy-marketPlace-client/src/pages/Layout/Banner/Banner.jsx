import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='banner flex items-center justify-center md:justify-start'>
                <div className='ml-0 md:ml-28 text-center md:text-left space-y-4' data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <p className=''>Hot & Trendy</p>

                    <h2 className='text-2xl font-semibold text-gray-600'>Toy World</h2>

                    <h1 className='text-5xl md:text-7xl font-bold'>Lets <span className='text-cyan-400'>Play</span> <br /> <span className='text-teal-400'>Anytime</span></h1>

                    <div className='py-3 uppercase'>
                        <span className='border border-violet-700 py-1 px-6 text-gray-800'>Save to 40% of the Toy</span>
                    </div>
                    
                    <button className='bg-violet-600 hover:bg-violet-700 py-2 px-7 text-white text-lg font-semibold'>
                        <div>
                            <p>Shop Now</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;