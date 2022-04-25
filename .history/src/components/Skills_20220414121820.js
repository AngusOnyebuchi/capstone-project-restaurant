import React from "react";
import {FaHtml5, FaCss3, FaJsSquare, FaBootstrap, FaReact, FaNodeJs, FaGit, FaGithub} from "react-icons/fa"

export default function Skills() {
    return(
        <div name="skills">

            {/** Container */}
            <div>
                <div>
                    <p>Experience</p>
                    <p>These are my skills or the technologies I've worked with.</p>
                </div>
                <div className="flex">
                    <div>
                        <FaHtml5 size={100}/> <p>HTML</p>
                        <img src={FaHtml5} alt="HTML Icon"/>
                    </div>
                    <div>
                        <FaCss3 size={100}/> <p>Css</p>
                        <img src={FaHtml5} alt="HTML Icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}