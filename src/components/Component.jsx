import React from 'react'
import { PiSmileyFill } from "react-icons/pi";


const Component = () => {
  return (
    <>
        <div className='w-full h-screen bg-black flex items-center justify-center bg-dark flex-col'>
            <div className="text-white font-bold text-5xl">Write Your Code here</div>
            <div className="flex items-center pt-5 text-white"><PiSmileyFill className="text-[50px] text-[green] pe-5" /> Happy Learing <sub className="text-[aqua] text-[8px] ps-4">~ Sribabu</sub> </div>

        </div>
    </>
  )
}

export default Component
