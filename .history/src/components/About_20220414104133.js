import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi"

export default function About() {
    return(
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-4">
                    <div className="sm:text-right pb-8">
                        <p>About</p>
                    </div>
                </div>
            </div>
        </div>
    )
}