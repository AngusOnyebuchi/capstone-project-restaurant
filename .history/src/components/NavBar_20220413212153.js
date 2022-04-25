import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaFacebook, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from "../images/passport.jpg"

export default function NavBar() {
  
  const [nav, setNav] = useState(true)
  const handleClick = () => setNav(!nav)
  return(
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200 ">
       
       <div>
          <img src={Logo} alt="Logo Image" style={{width: "50px"}}/>
       </div>
       
         {/* Menu */}
         <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
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
       <div className="flex fixed flex-col top-[35%] left-0">
         <ul>
           <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px]">
             <a className="flex justify-between items-center w-full text-gray-200 "
                href="/">
               Linkedin <FaFacebook size={30}/>
             </a>
           </li>
         </ul>
       </div>

    </div>
  )
}