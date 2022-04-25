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

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="mx-auto justify-center">
                        <FaHtml5 size={100}/> 
                        <p>HTML</p>
                    </div>
                    <div>
                        <FaCss3 size={100}/> <p>Css</p>
                        <img src={FaHtml5} alt="HTML Icon"/>
                    </div>
                    <div>
                        <FaJsSquare size={100}/> <p>Javascript</p>
                        <img src={FaHtml5} alt="HTML Icon"/>
                    </div>
                    <div>
                        <FaReact size={100}/> <p>React</p>
                        <img src={FaHtml5} alt="HTML Icon"/>
                    </div>
                    <div>
                        <FaBootstrap size={100}/> <p>Bootstrap</p>
                        <img src={FaHtml5} alt="HTML Icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}