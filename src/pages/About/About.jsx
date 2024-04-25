import React from 'react'
import Accordian from '../../components/Shared/Accordian'
import i1 from '../../assets/img/slider3.jpg'

const About = () => {
  return (
    <div>
        <img src={i1} alt="" className="w-[100%] h-[70vh]" />
        <div className="w-full text-center font-bold text-3xl md:text-6xl">About</div>
        <div className=" text-left md:text-center ps-[20px] md:ps-[0px] text-2xl ">
        "The mission of a food donation website could be to alleviate hunger and food insecurity by connecting individuals, businesses, and communities with surplus food to those in need, thereby ensuring everyone has access to nutritious meals and promoting food sustainability and social responsibility".
        </div>
        <div className="text-center text-3xl md:text-5xl font-bold mt-[100px]">FAQs</div>
        <div className="w-full max-w-[1000px] mx-auto">
            <Accordian />
        </div>
      
    </div>
  )
}

export default About
