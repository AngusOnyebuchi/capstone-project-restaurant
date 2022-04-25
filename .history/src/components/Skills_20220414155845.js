import React from "react";
import {FaHtml5, FaCss3, FaJsSquare, FaBootstrap, FaReact, FaNodeJs, FaGit, FaGithub} from "react-icons/fa"

export default function Skills() {
    return(
        <div name="skills" className="bg-[#0a192f] text-gray-200">

            {/** Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">Experience</p>
                    <p className="py-4">These are my skills or the technologies I've worked with.</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="mx-auto shadow-md shadow-[#040c16]">
                        <FaHtml5 size={100}/> 
                        <p>HTML</p>
                        {/** <img src={FaHtml5} alt="HTML Icon"/> this should be in place of the icon if the image is imported*/}
                    </div>
                    <div className="mx-auto shadow-md shadow-[#040c16]">
                        <FaCss3 size={100}/> 
                        <p>Css</p>
                    </div>
                    <div className="mx-auto shadow-md shadow-[#040c16]">
                        <FaJsSquare size={100}/> 
                        <p>Javascript</p>
                    </div>
                    <div className="mx-auto shadow-md shadow-[#040c16]">
                        <FaReact size={100}/> 
                        <p>React</p>
                    </div>
                    <div className="mx-auto shadow-md shadow-[#040c16]">
                        <FaBootstrap size={100}/> 
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
        </div>
    )
}