import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi"

export default function About() {
    return(
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pr-4">
                        <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div></div>
                </div>    
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-3xl sm:text-4xl font-bold justify-center">
                        <p>What you need to know about Angus Restaurant and important dining information.</p>
                    </div>
                    <div className="text-sm sm:text-lg">
                        <p>The desire to bring together flavours and taste from varied cultures to create
                        culinary dishes that caters to the vibrant palates of our customers started the journey that led to the birth of 
                        Angus Restaurant.
                        </p>
                        <p>
                            To simply put, we're a modern casual restaurant that offers selected but varied choices of different cuisines in a 
                            relaxed and welcoming environment.
                            We also have well stocked bar and an intimate terrace lounge making us the perfect location to wind down after work or ideal
                            spot for pre-drinks before a night out on weekends.
                        </p>
                        <p>Good Food & Good Vibes - This is our promise each time you visit or place an order!</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}