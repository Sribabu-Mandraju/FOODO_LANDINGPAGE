import React from 'react'
import Accordian from '../../components/Shared/Accordian'

const About = () => {
  return (
    <div>
        <div className="text-center text-3xl md:text-5xl font-bold mt-[100px]">FAQs</div>
        <div className="w-full max-w-[1000px] mx-auto">
            <Accordian />
        </div>
      
    </div>
  )
}

export default About
