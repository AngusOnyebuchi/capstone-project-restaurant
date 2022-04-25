import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from "../images/passport.jpg"
import { Link } from "react-scroll/modules";

export default function NavBar() {
  
  const [nav, setNav] = useState(true)
  const handleClick = () => setNav(!nav)
  return(
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200">
       
       <div>
          <img src={Logo} alt="Logo Image" style={{width: "50px"}}/>
       </div>
       
         {/* Menu */}
         <ul className="hidden md:flex">
            <li className="hover:border-b-2 border-pink-600">
            <Link to="home" smooth={true} duration={500} >Home</Link>
            </li>
            <li className="hover:border-b-2 border-pink-600">
            <Link to="about" smooth={true} duration={500} >About</Link>
            </li>
            <li className="hover:border-b-2 border-pink-600">
            <Link to="products" smooth={true} duration={500} >Products</Link>
            </li>
            <li className="hover:border-b-2 border-pink-600">
            <Link to="contact" smooth={true} duration={500} >Contact</Link>
            </li>
         </ul>

       {/* Hamburger */}
       <div onClick={handleClick} className="md:hidden z-10">
          {nav ? <FaBars/> : <FaTimes/>}
       </div>

       {/* Mobile menu*/}
       <ul className={nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-inherit flex flex-col justify-center items-center md:hidden"}>
            <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500} >Home</Link>
            </li>
            <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500} >About</Link>
            </li>
            <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="products" smooth={true} duration={500} >Products</Link>
            </li>
            <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} >Contact</Link>
            </li>
       </ul>

       {/**Social Icons */}
       <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
         <ul>

           <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
             <a className="flex justify-between items-center w-full text-gray-200 "
                href="https://linkedin.com/in/maduabuchi-angus-modum-715528194">
               LinkedIn <FaLinkedin size={30}/>
             </a>
           </li>

           <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
             <a className="flex justify-between items-center w-full text-gray-200 "
                href="https://github.com/AngusOnyebuchi">
               Github <FaGithub size={30}/>
             </a>
           </li>

           <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-900">
             <a className="flex justify-between items-center w-full text-gray-200 "
                href="mailto:Angusonyebuchi800@gmail.com">
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
                href="https://twitter.com/AngusOnyebuchi">
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
                href="https://facebook.com/profile.php?id=100008620207826">
               Facebook <FaFacebook size={30}/>
             </a>
           </li>

         </ul>
       </div>

    </div>
  )
}