import React from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import Logo from "../images/passport.jpg"

export default function NavBar() {
  return(
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-teal-900 text-gray-200 ">
       
       <div>
          <img src={Logo} alt="Logo Image" style={{width: "50px"}}/>
       </div>
       
         <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
         </ul>

       {/* Hamburger */}
       <div className="hidden">
          <FaBars/>
       </div>

       {/* Mobile menu*/}
       <ul className="hidden">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
       </ul>

       {/**Social Icons */}
       <div className="hidden"></div>

    </div>
  )
}