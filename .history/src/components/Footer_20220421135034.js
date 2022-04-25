import React from 'react'
import {FaHeart, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaGithub} from "react-icons/fa"

function Footer() {
  return (
    <div className='w-full bg-[#0a192f] text-white'>

      <div className='flex justify-center pt-24'>
        <h2 className='capitalize'>Connect with us on social media</h2>
      </div>

      <div className='flex justify-center gap-8 md:gap-20 my-8'>
        <FaFacebook size={30}/>
        <FaInstagram/>
        <FaLinkedin/>
        <FaTwitter/>
        <FaGithub/>
        <FaWhatsapp/>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <h4>Made with</h4> <FaHeart/> <h4>by Angus Codes - Development 2022</h4>
      </div>
    </div>
  )
}

export default Footer