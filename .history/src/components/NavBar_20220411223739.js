import React from "react";
import { BeakerIcon } from '@heroicons/react/solid'

export default function NavBar() {
    return(
        <div className="bg-blue-600 text-center">
          <h1 className="font-bold">This is a new Course</h1>
          <BeakerIcon className="h-5 w-5"/>
        </div>
    )
}