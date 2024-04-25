import React from 'react'
import Swiper1 from '../../components/swiper/Swiper'
import { FaHeart } from "react-icons/fa6";
import s1 from '../../assets/img/slider2.jpg'
import gif1 from '../../assets/img/delivery.gif'
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  return (
    <main>
      <section>
        <Swiper1 />
      </section>
      <section className="w-full flex items-center justify-center">
        <button className="rounded-[4px] my-[20px] border-[3px] border-[#008374] px-[20px] py-[5px] flex items-center text-[#008374] text-[30px] font-bold  hover:text-white hover:bg-[#008374]" style={{
          border:"2px solid #008374"
        }}>
          <span> DONATE NOW </span> 
          <span> <FaHeart className="text-[#008374] hover:text-white" /></span>
        </button>
      </section>
      <section className="w-full flex justify-center items-center flex-wrap flex-row-reverse my-5 mt-[30px]  bg-[#008374] ">
          <img src={gif1} alt="" className="h-[250px] w-[250px] mt-[40px] md:mt-[-20px] " />
          <div className="flex flex-col ps-3 w-[97%] max-w-[800px] my-5 mb-[40px]">
            <div className="text-3xl sm:text-3xl md:text-4xl font-bold pt-5 ps-[30px] text-white" >
               <p className="text-white text-center md:text-left">DOOR</p>
               <p className="underline text-[#07F602] text-center md:text-left">PICK UP</p>
               <p className="text-[25px] pt-3 text-center md:text-left">"Your Donate will be immediatley  <br />collected and sent to needy people"</p>
            </div>
            <button className="px-[7px] py-[5px] font-bold text-1xl border-[3px] my-3 text-white w-[140px] rounded-[7px] mx-auto md:ms-[60px] scale-[1.5] mt-[40px]">DONATE NOW</button>
          </div>
      </section>

    </main>
  )
}

export default Home
