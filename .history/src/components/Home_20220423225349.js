import React from "react";
import { HiArrowNarrowRight} from "react-icons/hi"
//import { Link } from "react-scroll/modules"; This line is removed cus We would use react-router instead of react-smooth-scroll

export default function Home() {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f] ">
            
            {/** Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
               <p className="text-pink-600 mt-12 mb-2">Welcome to</p>
               <h1 className="text-3xl sm:text-6xl font-bold text-white">Angus Restaurant</h1>
               <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0] py-3">Get the best meals ever from us</h2>
               <p className="text-[#8892b0] py-4 max-w-[700px]">Ranging from your special breakfast, lunch and dinner. We'll always give you the best - Good Food & Good Vibes!</p>
               <div>
                   <button className="group text-white border-2 px-6 py-3 my-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
                   <a href="/product">View Meals</a>
                   <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight className="ml-3 "/></span> </button>
               </div>
            </div>
        </div>
    )
}