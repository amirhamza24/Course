import sports1 from '../../../assets/Gallery/sports1.jpg'
import sports2 from '../../../assets/Gallery/sports2.jpg'
import sports3 from '../../../assets/Gallery/sports3.jpg'
import police1 from '../../../assets/Gallery/police1.jpg'
import police2 from '../../../assets/Gallery/police2.jpg'
import police3 from '../../../assets/Gallery/police3.jpg'
import truck1 from '../../../assets/Gallery/truck1.jpg'
import truck2 from '../../../assets/Gallery/truck2.jpg'
import truck3 from '../../../assets/Gallery/truck3.jpg'

const Gallery = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto my-12">
                <div>
                    <div className="py-0 md:py-10">
                        <h2 className="text-center text-3xl md:text-5xl text-violet-700 font-bold mb-5">Gallery</h2>
                        <hr className="w-28 mx-auto border-4 border-violet-600 mb-10" />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='w-88 shadow-xl relative' data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">

                            <img src={sports1} alt="" className='w-full h-64 border p-10' />
                        </div>

                        <div className='w-88 shadow-xl' data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">

                            <img src={sports2} alt="" className='w-full h-64 border p-10' />
                        </div>

                        <div className='w-88 shadow-xl' data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src={sports3} alt="" className='w-full h-64 border p-10' />
                        </div>

                        <div className='w-88 shadow-xl' data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src={police1} alt="" className='w-full h-64 border p-10' />
                        </div>

                        <div className='w-88 shadow-xl' data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src={police2} alt="" className='w-full h-64 border p-10' />
                        </div>

                        <div className='w-88 shadow-xl' data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src={police3} alt="" className='w-full h-64 border p-10' />
                        </div>

                        <div className='w-88 shadow-xl' data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src={truck1} alt="" className='w-full h-64 border p-10' />
                        </div>

                        <div className='w-88 shadow-xl' data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src={truck2} alt="" className='w-full h-64 border p-10' />
                        </div>

                        <div className='w-88 shadow-xl' data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src={truck3} alt="" className='w-full h-64 border p-10' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;