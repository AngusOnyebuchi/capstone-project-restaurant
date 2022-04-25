import React from "react";
import { HiArrowNarrowRight} from "react-icons/hi"

export default function Home() {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f] ">
            
            {/** Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
               <p>My name is</p>
               <h1>Angus Modum</h1>
            </div>
        </div>
    )
}