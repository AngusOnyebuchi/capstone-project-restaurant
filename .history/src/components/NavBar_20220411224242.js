import React from "react";
import { BeakerIcon } from '@heroicons/react/solid'

export default function NavBar() {
    return(
        <div className="bg-blue-600 text-center">
          <h1 className="font-bold text-white text-lg pt-[12px] pb-2">This is a new Course</h1>
          <BeakerIcon className="h-5 w-5 text-white"/>
        </div>
    )
}