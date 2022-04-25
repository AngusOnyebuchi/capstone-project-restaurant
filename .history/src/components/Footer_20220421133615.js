import React from 'react'
import {FaHeart} from "react-icons/fa"

function Footer() {
  return (
    <div className='w-full bg-[#0a192f] text-white'>
      <div className='flex justify-center'>
        <h2>Connect with us</h2>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <h4>Made with</h4> <FaHeart/> <h4>by Angus Codes - Development 2022</h4>
      </div>
    </div>
  )
}

export default Footer