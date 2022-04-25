import React from "react";
import WorkImg from "../images/pic1.jpg"
import WorkImg2 from "../images/pic2.jpg"
import WorkImg3 from "../images/pic3.jpg"
import WorkImg4 from "../images/pic4.jpg"
import WorkImg5 from "../images/pic5.jpg"
import WorkImg6 from "../images/pic6.jpg"

export default function Products() {
    return(
        <div name="products" className="w-full sm:h-screen text-gray-200 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Products</p>
                    <p className="pt-3">Order and get it delivered to you under 45 minutes</p>
                </div>

            
                {/** Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    
                    {/** Grid Item --Card 1 */}
                    <div className="border p-4">
                        <div style={{backgroundImage: `url(${WorkImg})`}}
                            className="relative shadow-lg shadow-[#040c16] group container rounded-l-md flex justify-center items-center mx-auto content-div">
                        
                            <p className="absolute bg-white text-black top-[80%] right-0 p-[3px]">25 - 45 min</p>
                        </div>
                        
                        <div className="flex items-center justify-left gap-8 py-4">
                            <h2>Rice and Stew</h2>
                            <h3>$500</h3>
                            <button className="bg-gray-200 text-blue-900 px-2 py-1 rounded-md">Order</button>
                        </div>
                    </div>
                    
                </div>


            </div>
        </div>
    )
}