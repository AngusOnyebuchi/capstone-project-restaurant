import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from "../images/passport.jpg"

export default function NavBar() {
  
  const [nav, setNav] = useState(true)
  const handleClick = () => setNav(!nav)
  return(
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200 ">
       
       <div>
          <img src={Logo} alt="Logo Image" style={{width: "50px"}} className="border border-radius-[5px]"/>
       </div>
       
         {/* Menu */}
         <ul className="hidden md:flex">
            <li className="hover:border-b-2 border-pink-600">Home</li>
            <li className="hover:border-b-2 border-pink-600">About</li>
            <li className="hover:border-b-2 border-pink-600">Skills</li>
            <li className="hover:border-b-2 border-pink-600">Work</li>
            <li className="hover:border-b-2 border-pink-600">Contact</li>
         </ul>

       {/* Hamburger */}
       <div onClick={handleClick} className="md:hidden z-10">
          {nav ? <FaBars/> : <FaTimes/>}
       </div>

       {/* Mobile menu*/}
       <ul className={nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-inherit flex flex-col justify-center items-center md:hidden"}>
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About</li>
            <li className="py-6 text-4xl">Skills</li>
            <li className="py-6 text-4xl">Work</li>
            <li className="py-6 text-4xl">Contact</li>
       </ul>

       {/**Social Icons */}
       <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
         <ul>

           <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
             <a className="flex justify-between items-center w-full text-gray-200 "
                href="/">
               LinkedIn <FaLinkedin size={30}/>
             </a>
           </li>

           <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
             <a className="flex justify-between items-center w-full text-gray-200 "
                href="/">
               Github <FaGithub size={30}/>
             </a>
           </li>

           <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-900">
             <a className="flex justify-between items-center w-full text-gray-200 "
                href="/">
               Email <HiOutlineMail size={30}/>
             </a>
           </li>

           <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-900">
             <a className="flex justify-between items-center w-full text-gray-200 "
                href="/">
               Resume <BsFillPersonLinesFill size={30}/>
             </a>
           </li>

           <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
             <a className="flex justify-between items-center w-full text-gray-200 "
                href="/">
               Twitter <FaTwitter size={30}/>
             </a>
           </li>

           <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600">
             <a className="flex justify-between items-center w-full text-gray-200 "
                href="/">
               Whatsapp <FaWhatsapp size={30}/>
             </a>
           </li>

           <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
             <a className="flex justify-between items-center w-full text-gray-200 "
                href="/">
               Facebook <FaFacebook size={30}/>
             </a>
           </li>

         </ul>
       </div>

    </div>
  )
}