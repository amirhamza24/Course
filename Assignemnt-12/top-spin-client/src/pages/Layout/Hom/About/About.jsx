import img1 from '../../../../assets/About/about1.jpg'
import img2 from '../../../../assets/About/about2.jpg'
import { BiTennisBall } from 'react-icons/Bi';

const About = () => {
    return (
        <div className='w-10/12 mx-auto py-32'>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-1/2 relative'>
                    <img className='' src={img1} alt="" />
                    <img className='absolute left-0 top-1/3 h-72 w-72 border-t-8 border-r-8 border-white' src={img2} alt="" />
                </div>

                <div className='w-1/2 px-16 flex items-center bg-white absolute  left-10 mt-4 py-10 shadow-xl'>
                    <div className='space-y-5'>
                        <h4 className=' text-lime-400 flex items-center text-2xl uppercase font-semibold italic title-font tracking-wider'>
                            <BiTennisBall className='mr-1 text-2xl'></BiTennisBall> 
                            Welcome to TopSpin
                        </h4>

                        <h2 className='text-3xl uppercase font-semibold italic title-font text-black tracking-wider'>We are the best tennis school for a champion</h2>

                        <p className='title-info text-sm text-gray-500'>World class academy coaches and player development team. World class / elite competition. World class match, training and learning experiences.</p>

                        <button className='bg-lime-400 hover:bg-lime-300 duration-200 px-10 py-3 title-font text-black font-semibold uppercase rounded-full'>About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;