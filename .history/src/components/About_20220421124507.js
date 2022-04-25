import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi"

export default function About() {
    return(
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pr-4">
                        <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div></div>
                </div>    
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>What you need to know about Angus Restaurant and important dining information.</p>
                    </div>
                    <div>
                        <p className="text-md sm:text-lg">I am passionate about building excellent softwares and web applications that improves the lives of those around me.
                            I specialize in creating interactive websites and softwares for clients ranging from individuals and small businesses
                            all the way to large enterprise corporation. What would you do if you had a software expert at your fingertips.
                        </p>
                    </div>
                </div>    
            </div>
        </div>
    )
}