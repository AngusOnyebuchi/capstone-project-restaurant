import React from "react";
import { BeakerIcon } from '@heroicons/react/solid'
import { MenuIcon } from "@heroicons/react/solid";

export default function NavBar() {
    return(
        <div className="bg-blue-600 flex justify-between items-center">
          <div className="items-center flex">
            <BeakerIcon className="h-8 w-8 p-1 text-white"/>
            <h1 className="font-bold text-white text-lg pt-[12px] pb-2">This is a new Course</h1>
          </div>
          <ul className="md:hidden text-white font-bold flex gap-2">
                 <l1>Home</l1>
                 <l1>About</l1>
                 <l1>Contact</l1>
             </ul>
          <div>
             <MenuIcon className="h-8 w-8 text-red-400 md:text-white mr-4"/>
          </div>
        </div>
    )
}