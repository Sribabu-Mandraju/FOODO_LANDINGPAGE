import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../index.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import s1 from '../../assets/img/slider4.jpg'
import s2 from '../../assets/img/slider2.jpg'
import s3 from '../../assets/img/slider3.jpg'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Swiper1 = ()  => {
  return (
    <>
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
        navigation={false} // Set navigation to false to hide prev and next buttons
        modules={[Autoplay, Pagination]}
        className="mySwiper border relative h-[65vh]" style={{
            height:"70vh",
            marginTop:"75px"
        }}
      >
        <div className="absolute w-full h-[100%] border  pointer-events-none left-0 top-0 flex flex-col justify-center ps-[50px] md:ps-[100px] ">
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold pt-[10px] text-white mt-[20px]">Let<span className="text-[#07F602]">'</span>s</div>
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold pt-[10px] text-[#07F602]">FEED</div>
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold pt-[10px] text-white ">Those</div>
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold pt-[10px] text-[#07F602]"><span className="text-white">In</span> NEED</div>
        </div>
        <SwiperSlide className="relative flex justify-center items-center s1 bg-[black] ">
            <div className="absolute left-0 top-0 w-[100%] h-[100%] pointer-events-none flex flex-col">
                
                

            </div>
            <img src={s1} alt="" className="w-[100%] h-[100%] opacity-[0.4]"/>
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center items-center s1 bg-[black]">
            <img src={s2} alt="" className="w-[100%] h-[100%] opacity-[0.4]"/>
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center items-center s1 bg-[black]">
            <img src={s3} alt="" className="w-[100%] h-[100%] opacity-[0.4]"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swiper1;

