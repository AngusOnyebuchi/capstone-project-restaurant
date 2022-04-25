import React from "react";
import Logo from "../images/passport.jpg"

export default function NavBar() {
  return(
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-teal-900 text-gray-200 ">
       <div>
          <Logo className="h-4"/>
       </div>
    </div>
  )
}