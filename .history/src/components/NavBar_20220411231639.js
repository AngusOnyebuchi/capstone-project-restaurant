import React from "react";
import { BeakerIcon } from '@heroicons/react/solid'

export default function NavBar() {
    return(
        <div className="bg-blue-600 items-center flex">
            <BeakerIcon className="h-8 w-8 text-white"/>
            <h1 className="font-bold text-white text-lg pt-[12px] pb-2">This is a new Course</h1>
        </div>
    )
}