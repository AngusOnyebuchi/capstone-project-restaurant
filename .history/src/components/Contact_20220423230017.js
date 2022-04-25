import React from "react";
import {FaHeart, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaGithub} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"

export default function Contact() {
    return(
        <section>
            {/** Contact / Form Section */}
        <div name="contact" className="w-full bg-[#0a192f] flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/fe45028b-14d7-4641-8e48-4acf76466533" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 mt-12 pt-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-200">Contact</p>
                    <p className="text-gray-200 pt-5">You can fill and submit the form below to gives us reviews or shoot us an email for collaborations of any sort. We look forward to hearing from you!</p>
                </div>
                <input type="text" placeholder="Name" name="name" className="p-2 bg-[#ccd6f6]"/>
                <input type="email" placeholder="Email" name="email" className="my-4 p-2 bg-[#ccd6f6]"/>
                <textarea name="message" rows="10" placeholder="Message" className="bg-[#ccd6f6] p-2"></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
            </form>
        </div>

        
        {/** Footer Section */}
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


        </section>
    )
}