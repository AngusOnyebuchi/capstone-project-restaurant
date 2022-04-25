import React from "react";

export default function Contact() {
    return(
        <div name="contact" className="w-full bg-[#0a192f] flex justify-center items-center p-2">
            <form method="POST" action="https://getform.io/f/fe45028b-14d7-4641-8e48-4acf76466533" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 mt-12">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-200">Contact</p>
                    <p className="text-gray-200 pt-2">Fill and submit the form below or shoot me an email.</p>
                </div>
                <input type="text" placeholder="Name" name="name" className="p-2 bg-[#ccd6f6]"/>
                <input type="email" placeholder="Email" name="email" className="my-4 p-2 bg-[#ccd6f6]"/>
                <textarea name="message" rows="10" placeholder="Message" className="bg-[#ccd6f6] p-2"></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
            </form>
        </div>
    )
}