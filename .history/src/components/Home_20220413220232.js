import React from "react";
import { HiArrowNarrowRight} from "react-icons/hi"

export default function Home() {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f] ">
            <img src={HiArrowNarrowRight} alt="/"/>
           <h1 className="text-white">This is the home section</h1>
        </div>
    )
}