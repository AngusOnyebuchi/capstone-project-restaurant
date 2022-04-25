import React from "react";
import { HiArrowNarrowRight} from "react-icons/hi"

export default function Home() {
    return (
        <div className="bg-red-900 p-10 ">
            <img src={HiArrowNarrowRight} alt="/"/>
           <h1 className="text-white">This is the home section</h1>
        </div>
    )
}