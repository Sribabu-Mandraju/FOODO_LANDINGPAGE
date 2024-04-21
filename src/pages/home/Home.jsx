import React from 'react'
import Swiper1 from '../../components/swiper/Swiper'
import { FaHeart } from "react-icons/fa6";

const Home = () => {
  return (
    <main>
      <section>
        <Swiper1 />
      </section>
      <section className="w-full flex items-center justify-center">
        <button className="rounded-[4px] my-[20px] border[2px] border-[#008374] px-[20px] py-[5px] flex items-center text-[#008374] text-[30px] font-bold  hover:text-white hover:bg-[#008374]" style={{
          border:"2px solid #008374"
        }}>
          <span> DONATE NOW </span> 
          <span> <FaHeart className="text-[#008374]" /></span>
        </button>
      </section>
    </main>
  )
}

export default Home
