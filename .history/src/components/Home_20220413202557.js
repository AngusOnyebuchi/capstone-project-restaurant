import React from "react";
import { HiArrowNarrowRight} from "react-icons/hi"

export default function Home() {
    return (
        <div className="bg-red-500 p-10 h-screen">
            <img src={HiArrowNarrowRight} alt="/"/>
           <h1 className="text-white">This is the home section</h1>
        </div>
    )
}