import { Swiper, SwiperSlide } from "swiper/react";
import './Banner.css'
import banner1 from '../../../../assets/banner/banner.jpg'
import banner2 from '../../../../assets/banner/banner2.jpg'
import banner3 from '../../../../assets/banner/banner3.jpg'

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <div className='banner h-full'>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="h-[100vh] w-full relative" src={banner1} alt="" />

            <div className='w-8/12 mx-auto absolute h-full top-20 left-20 md:left-48'  data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                <div className='flex items-center justify-center text-center text-white'>
                    <div className='space-y-7'>
                        <h2 className='text-4xl md:text-7xl leading-tight tracking-wide font-bold'>Creating <span className='text-lime-400'>World-Class</span> <br /> Champion Athletes</h2>

                        <p className='banner-info text-gray-300 w-full md:w-8/12 mx-auto'>World class academy coaches and player development team. World class / elite competition. World class match, training and learning experiences.</p>

                        <button className='bg-lime-400 hover:-translate-y-2 duration-200 px-10 py-4 banner-info text-black font-semibold uppercase rounded-full'>Register Now</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <img className="h-[100vh] w-full relative" src={banner2} alt="" />

        <div className='w-8/12 mx-auto absolute h-full top-20 left-20 md:left-48'>
            <div className='flex items-center justify-center text-center text-white'>
                <div className='space-y-7'>
                    <h2 className='text-4xl md:text-7xl leading-tight tracking-wide font-bold'>Creating <span className='text-lime-400'>World-Class</span> <br /> Champion Athletes</h2>

                    <p className='banner-info text-gray-300 w-full md:w-8/12 mx-auto'>World class academy coaches and player development team. World class / elite competition. World class match, training and learning experiences.</p>

                    <button className='bg-lime-400 hover:-translate-y-2 duration-200 px-10 py-4 banner-info text-black font-semibold uppercase rounded-full'>Register Now</button>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <img className="h-[100vh] w-full relative bannerImg" src={banner3} alt="" />

        <div className='w-8/12 mx-auto absolute h-full top-20 left-20 md:left-48'>
            <div className='flex items-center justify-center text-center text-white'>
                <div className='space-y-7'>
                    <h2 className='text-4xl md:text-7xl leading-tight tracking-wide font-bold'>Creating <span className='text-lime-400'>World-Class</span> <br /> Champion Athletes</h2>

                    <p className='banner-info text-gray-300 w-full md:w-8/12 mx-auto'>World class academy coaches and player development team. World class / elite competition. World class match, training and learning experiences.</p>

                    <button className='bg-lime-400 hover:-translate-y-2 duration-200 px-10 py-4 banner-info text-black font-semibold uppercase rounded-full'>Register Now</button>
                </div>
            </div>
        </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
        </div>
    );
};

export default Banner;