import React from "react";
import {FaHtml5, FaCss3, FaJsSquare, FaBootstrap, FaReact, FaNodeJs, FaGit, FaGithub} from "react-icons/fa"

export default function Skills() {
    return(
        <div name="skills" className="w-full sm:h-screen bg-[#0a192f] text-gray-200">

            {/** Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-pink-600 ">Skills</p>
                    <p className="py-3">These are my skills/ the technologies I've worked with.</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                        <FaHtml5 size={70} className="text-orange-300"/> 
                        <p className="my-4 uppercase">html</p>
                        {/** <img src={FaHtml5} alt="HTML Icon"/> this should be in place of the icon if the image is imported*/}
                    </div>
                    <div className="mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                        <FaCss3 size={70} className="text-blue-500"/> 
                        <p className="my-4 uppercase">Css</p>
                    </div>
                    <div className="mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                        <FaJsSquare size={70} className="text-yellow-300"/> 
                        <p className="my-4 uppercase">Javascript</p>
                    </div>
                    <div className="mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                        <FaReact size={70} className="text-blue-300"/> 
                        <p className="my-4 uppercase">React</p>
                    </div>
                    <div className="mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                        <FaBootstrap size={70} className="text-pink-300"/> 
                        <p className="my-4 uppercase">Bootstrap</p>
                    </div>
                    <div className="mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                        <FaNodeJs size={70} className="text-green-400"/> 
                        <p className="my-4 uppercase">NodeJs</p>
                    </div>
                    <div className="mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                        <FaGit size={70} className="text-pink-200"/> 
                        <p className="my-4 uppercase">Git</p>
                    </div>
                    <div className="mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                        <FaGithub size={70} className="text-white"/> 
                        <p className="my-4 uppercase">Github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}