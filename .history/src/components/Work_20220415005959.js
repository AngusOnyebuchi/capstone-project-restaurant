import React from "react";
import WorkImg from "../images/pic1.jpg"
import WorkImg2 from "../images/pic2.jpg"
import WorkImg3 from "../images/pic3.jpg"
import WorkImg4 from "../images/pic4.jpg"
import WorkImg5 from "../images/pic5.jpg"
import WorkImg6 from "../images/pic6.jpg"

export default function Work() {
    return(
        <div name="work" className="w-full sm:h-screen text-gray-200 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
                    <p className="py-6">Check out some of my recent works</p>
                </div>
            
                {/** Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    
                    {/** Grid Item --Project1 */}
                    <div style={{backgroundImage: `url(${WorkImg})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/** Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application 1
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button></button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/** Grid Item --Project2 */}
                    <div style={{backgroundImage: `url(${WorkImg2})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/** Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application 2
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button></button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/** Grid Item --Project3 */}
                    <div style={{backgroundImage: `url(${WorkImg3})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/** Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application 3
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button></button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/** Grid Item --Project4 */}
                    <div style={{backgroundImage: `url(${WorkImg4})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/** Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application 4
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button></button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/** Grid Item --Project5 */}
                    <div style={{backgroundImage: `url(${WorkImg5})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/** Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application 5
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button></button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/** Grid Item --Project6 */}
                    <div style={{backgroundImage: `url(${WorkImg6})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/** Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application 6
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button></button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}