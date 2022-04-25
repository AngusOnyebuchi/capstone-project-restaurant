import React from 'react'
import {FaHeart, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaGithub} from "react-icons/fa"

function Footer() {
  return (
    <div className='w-full bg-[#0a192f] text-white'>
      <div className='flex justify-center'>
        <h2 className='capitalize'>Connect with us on social media</h2>
      </div>

      <div>
        <FaFacebook/>
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