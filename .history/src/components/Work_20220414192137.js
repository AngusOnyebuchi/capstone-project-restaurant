import React from "react";
import WorkImg from "../images/pic1.jpg"
import EstateImg from "../images/pic3.jpg"
import NewImg from "../images/pic3.jpg"

export default function Work() {
    return(
        <div name="work" className="w-full md:h-screen text-gray-200 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
                    <p className="py-6">Check out some of my recent works</p>
                </div>

                <div style={{backgroundImage: `url(${WorkImg})`}}
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/** Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div>
                                <a href="/">
                                    <button></button>
                                </a>
                                <a href="/">
                                    <button></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}