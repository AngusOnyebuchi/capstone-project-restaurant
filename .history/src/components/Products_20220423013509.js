import React from "react";

export default function Products(props) {

    return(
        <div className="w-full  text-gray-200 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

            
                {/** Container */}
                <div >
                    {/** Grid Item --Card 1 */}
                    <div className="border p-4">
                        <div style={{backgroundImage: `url(${props.image})`}}
                            className="relative shadow-lg shadow-[#040c16] group container rounded-t-md flex justify-center items-center mx-auto content-div">
                        
                            <p className="absolute bg-white text-black top-[80%] right-0 p-[3px]">{props.time} - {props.time1} min</p>
                        </div>
                        
                        <div className="flex items-center justify-left gap-8 py-4 overflow-hidden">
                            <h2>{props.food}</h2>
                            <h3>Price: ${props.price}</h3>
                            <button className="bg-gray-200 text-blue-900 px-2 py-[1px] rounded-md">Order</button>
                        </div>
                    </div>
                    
                </div>


            </div>
        </div>
    )
}