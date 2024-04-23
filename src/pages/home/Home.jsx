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
      <section className="w-full flex items-center justify-center relative flex-wrap my-5 min-h-[70vh]">
        <img src={s1} alt="" className="w-[90%] hidden lg:block max-w-[320px] h-[400px] ms-4 absolute left-0 top-0" />
        <div className="w-[97%] max-w-[900px] absolute bg-[#008374]  right-0 rounded-[13px] top-0" style={{
          borderRadius:"25px 0px 0px 25px"
        }}>
          <div className="flex flex-col mx-[24px] mb-[30px] mt-[30px] ps-3 " style={{
            borderLeft:"5px solid white"
          }}>
            <div className="font-bold  text-5xl md:text-5xl"  >About Us</div>
            <div className="text-white text-3xl pt-3">
              HOPE <span className="text-[yellow] font-bold"> FOUNDATION FOR HELP POOR PEOPLE </span>
              <div className="text-white text-[15px] md:text-[20px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sapiente, laudantium maiores ea optio pariatur vero rationevoluptates voluptatibus nam officia! Pariatur duc imus explicabo modi sint tempore officiis. Quisquam, eveniet?</div>
              <div className="mt-5 w-full flex flex-rw-reverse">
                <div className="text-[yellow] underline">Know more......</div>
              </div>
            </div>
          </div>
        </div>
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
      <section className="w-full">
        <div className="font-bold text-4xl md:text-5xl py-5 text-[#008374] ps-3">Recent Blogs</div>
        <div className="w-full flex flex-wrap items-center  justify-around gap-3">
          <div className="flex flex-col border w-[90%] mx-3 max-w-[600px] rounded-[5px] ">
            <img src={s1} alt=""  className="w-[100%] mx-auto h-[240px]" />
            <div className="p-2 font-bold text-2xl text-[grey]">Feeding Homeless Person</div>
            <div className="p-2 text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Molestias sunt veritatis accusamus odit totam ab, nam consequatur <br />sit dolores, excepturi doloremque nisi rem magni ut doloribus optio quasi provident neque!</div>
            <button className=" text-1xl text-right p-4 font-bold italic underline flex items-center text-[#008374]">
              <span className="pe-3">Know more </span>
              <FaArrowRight />
            </button>
          </div>
          <div className="flex flex-col border w-[90%] mx-3 max-w-[600px] rounded-[5px] ">
            <img src={s1} alt=""  className="w-[100%] mx-auto h-[240px]" />
            <div className="p-2 font-bold text-2xl text-[grey]">Feeding Homeless Person</div>
            <div className="p-2 text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Molestias sunt veritatis accusamus odit totam ab, nam consequatur <br />sit dolores, excepturi doloremque nisi rem magni ut doloribus optio quasi provident neque!</div>
            <button className=" text-1xl text-right p-4 font-bold italic underline flex items-center text-[#008374]">
              <span className="pe-3">Know more </span>
              <FaArrowRight />
            </button>
          </div>
        </div>
        
      </section>
    </main>
  )
}

export default Home
