import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import slider1 from '../../../../assets/category/slider1.jpg'
import slider2 from '../../../../assets/category/slider2.jpg'
import slider3 from '../../../../assets/category/slider3.jpg'
import slider4 from '../../../../assets/category/slider4.jpg'
import slider5 from '../../../../assets/category/slider5.jpg'
import slider6 from '../../../../assets/category/slider6.jpg'
import slider7 from '../../../../assets/category/slider7.jpg'
import slider8 from '../../../../assets/category/slider8.jpg'
import slider9 from '../../../../assets/category/slider9.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <div className="w-10/12 mx-auto my-16" data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="1000"
        data-aos-duration="1000">
            <SectionTitle
                heading={"Category"}
                subHeading={"Our Categories Here"}
            ></SectionTitle>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="h-60 md:h-96" src={slider1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="h-60 md:h-96" src={slider2} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="h-60 md:h-96" src={slider3} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="h-60 md:h-96" src={slider4} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="h-60 md:h-96" src={slider5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-60 md:h-96" src={slider6} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="h-60 md:h-96" src={slider7} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="h-60 md:h-96" src={slider8} alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img className="h-60 md:h-96" src={slider9} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
