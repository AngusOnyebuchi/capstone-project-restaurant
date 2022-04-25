import React from "react";

export default function Contact() {
    return(
        <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form action="" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-200">Contact</p>
                    <p className="text-gray-200 py-4">Submit the form below or shoot me an email - Angusonyebuchi800@gmail.com</p>
                </div>
                <input type="text" placeholder="Name" name="name" className="p-2 bg-[#ccd6f6]"/>
                <input type="email" placeholder="Email" name="email" className="my-4 p-2 bg-[#ccd6f6]"/>
                <textarea name="message" rows="10" placeholder="Message" className="bg-[#ccd6f6] p-2"></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
            </form>
        </div>
    )
}