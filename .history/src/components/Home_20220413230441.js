import React from "react";
import { HiArrowNarrowRight} from "react-icons/hi"

export default function Home() {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f] ">
            
            {/** Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
               <p className="text-pink-600 mt-8 mb-2">My name is</p>
               <h1 className="text-3xl sm:text-6xl font-bold text-white">Maduabuchi Angus Modum</h1>
               <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0] py-3">I am a Frontend Web Developer </h2>
               <p className="text-[#8892b0] py-4 max-w-[700px]">As a React / Frontend Developer, I specialize in building and designing exceptional digital experiences. Currently I focus on building responsive websites et web applications and as well, working towards becoming a fullstack developer.</p>
               <div>
                   <button className="group text-white border-2 px-6 py-3 my-3 flex items-center hover:bg-pink-600 hover:border-pink-600">View Work 
                   <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight className="ml-3 "/></span> </button>
               </div>
            </div>
        </div>
    )
}