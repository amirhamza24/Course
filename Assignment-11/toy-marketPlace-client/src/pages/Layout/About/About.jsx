import img from '../../../assets/All/about2.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <div className='my-16 fontStyle'>
                <div className="w-10/12 mx-auto">
                    <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                        <div className='w-full md:w-6/12 space-y-6 'data-aos="fade-right"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="1000"
                                data-aos-duration="1000">
                            <h2 className='text-3xl md:text-5xl text-teal-400 font-bold capitalize'>We provide & offer premium service</h2>

                            <div className='space-y-3 text-gray-500 text-sm'>
                                <p>Our area of practice is quite wide: toy production, custom-made toys for every age, toy brand promotion, playrooms design with equipment, and of course kids camps and events!</p>

                                <p>Contact us today and get a free consultation on any product we offer. Join our community for updates.</p>
                            </div>

                            <button className='bg-violet-600 hover:bg-violet-700 py-2 px-7 text-white text-lg font-semibold'>
                                <h2>About Us</h2>
                            </button>

                        </div>

                        <div className='w-full md:w-5/12'>
                            <div data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="1000"
                                data-aos-duration="1000">
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;