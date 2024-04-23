import React from 'react'
import { FaSearch } from "react-icons/fa";
import s1 from '../../assets/img/slider2.jpg'
import { FaArrowRight } from "react-icons/fa";



const Blogs = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center mt-[100px] mb-[30px]">
        <div className="font-bold text-3xl md:text-5xl px-3">Blogs</div>
        <div className="flex items-center">
          <FaSearch className="me-[-50px] z-[1]"/>
          <input type="text" className="border h-[40px] ps-[25px] mx-[30px] shadow rounded-[4px]  outline"  placeholder='search....'/>
        </div>
      </div>
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
    </>
  )
}

export default Blogs
