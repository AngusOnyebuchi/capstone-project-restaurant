import React from 'react'
import {FaHeart, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaGithub} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"

function Footer() {
  return (
    <div className='w-full bg-[#0a192f] text-gray-200'>

      <div className='flex justify-center pt-28'>
        <h2 className='uppercase'>Connect with us </h2>
      </div>

      <div className='flex justify-center gap-8 md:gap-24 mt-8 mb-12'>
        <a href="https://facebook.com/profile.php?id=100008620207826">
        <FaFacebook size={30} className="cursor-pointer"/>
        </a>
        <a href="https://instagram.com/angus_buchi">
        <FaInstagram size={30} className="cursor-pointer"/>
        </a>
        <a href="https://linkedin.com/in/maduabuchi-angus-modum-715528194">
        <FaLinkedin size={30} className="cursor-pointer"/>
        </a>
        <a href="https://twitter.com/AngusOnyebuchi">
        <FaTwitter size={30} className="cursor-pointer"/>
        </a>
        <a href="https://github.com/AngusOnyebuchi">
        <FaGithub size={30} className="cursor-pointer"/>
        </a>
        <a href="mailto:angusonyebuchi800@gmail.com">
        <HiOutlineMail size={30} className="cursor-pointer"/>
        </a>
      </div>

      <div className='flex items-center justify-center gap-2 text-sm pb-4'>
        <h4>Made with</h4> <FaHeart/> <h4>by Angus - Development 2022</h4>
      </div>
    </div>
  )
}

export default Footer