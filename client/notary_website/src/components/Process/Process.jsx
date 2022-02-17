import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { FaBell, FaShippingFast, FaStar, FaHeadSideMask, FaMarker, FaRoute, FaHandshake } from 'react-icons/fa'
import timelineElements from './timelineElements';
import "react-vertical-timeline-component/style.min.css"

const Process = () => {

  return (

   
    <div id="process" className="flex flex-col relative justify-start items-center bg-button-color h-[100%] py-[5%] md:mt-[20%]">

        <div className="process-waves">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
        {/* Header */}
        <div className="flex flex-row justify-center items-center">
            <h1 className="mobile-header -tracking-[0.64px] text-[64px] text-[#ffffff] mb-[50px] font-bold text-shadow" >How does it work?</h1>

        </div>
        {/* Vertical timeline contents */}
        {/* https://aleksandarpopovic.com/Build-Simple-Timeline-in-React/ */}
        <VerticalTimeline>
            {timelineElements.map((element) => {

                let isBellIcon = element.icon === "bell" 
                let isDocument = element.icon === "document"
                let isStar = element.icon === "star"
                let isMask = element.icon === "mask"
                let isSign = element.icon === "sign"
                let isRoute = element.icon === "route"
                let isHandShake = element.icon === "handshake"




                return (
                    
                    <VerticalTimelineElement
                        key={element.id}
                        date={element.step}
                        dateClassName="step"
                        icon={isBellIcon ? <FaBell/> : 
                            isDocument ? <FaShippingFast/> :
                            isStar ? <FaStar/> :
                            isMask ? <FaHeadSideMask/> :
                            isSign ? <FaMarker/> :
                            isRoute ? <FaRoute/> :
                            isHandShake ? <FaHandshake/> :
                            null

                            }
                    >
                        <h3 className="text-[25px]">
                            {element.title}
                        </h3>



    
                        <p id="description" className="text-[25px]">{element.description}</p>

                        {isBellIcon ? 
                        <div className="flex flex-row justify-center items-center mt-[2%]">

                            <button className="flex flex-row justify-center py-[2%] rounded-[5px] w-[100%] shadow-lg text-[23px] text-white outline-hidden cursor-pointer transition-all ease-in-out duration-200 bg-button-color whitespace-nowrap text-shadow hover:bg-button-color-hover" onClick={()=> window.open("/fees")}>Calculate Fee Estimate</button> 
                        </div> : ""}
                
                    </VerticalTimelineElement>
                )
            })}

        </VerticalTimeline>
            
        {/* bottom slant */}
        {/* <div id="services" class="services-tilt">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div> */}

    </div>
    )
};

export default Process;
