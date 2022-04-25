import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import Logo from "../images/passport.jpg"

export default function NavBar() {
  
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return(
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-teal-900 text-gray-200 ">
       
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
          <FaBars/>
       </div>

       {/* Mobile menu*/}
       <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-inherit flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About</li>
            <li className="py-6 text-4xl">Skills</li>
            <li className="py-6 text-4xl">Work</li>
            <li className="py-6 text-4xl">Contact</li>
       </ul>

       {/**Social Icons */}
       <div className="hidden"></div>

    </div>
  )
}