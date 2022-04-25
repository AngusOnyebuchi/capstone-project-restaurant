import React from "react";
import {FaHtml5, FaCss3, FaJsSquare, FaBootstrap, FaReact, FaNodeJs, FaGit, FaGithub} from "react-icons/fa"

export default function Skills() {
    return(
        <div name="skills" className="bg-[#0a192f] text-white">

            {/** Container */}
            <div className="max-w-[1000px] mx-auto">
                <div>
                    <p>Experience</p>
                    <p>These are my skills or the technologies I've worked with.</p>
                </div>
                <div className="grid grid-col-4 gap-8">
                    <div className="mx-auto">
                        <FaHtml5 size={100}/> <p>HTML</p>
                        <img src={FaHtml5} alt="HTML Icon"/>
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