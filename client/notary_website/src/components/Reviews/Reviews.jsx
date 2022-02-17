import React, { useEffect, useRef} from 'react';


const Reviews = ({isVisible, setIsVisible}) => {

    // full solution on how to use intersection observer api
    // to animate on viewport intersection
    // https://dev.to/producthackers/intersection-observer-using-react-49ko

    const containerRef = useRef(null) 
    

    
    const callBackFunction = (entries) => {
        const [ entry ] = entries

        // when the reviews header intersects the screen
        // this evaluates to true everytime that is the case.. 
        // *basically this makes the reviews bubble animate once per page refresh
  
        if (entry.isIntersecting) {
            setIsVisible(entry.isIntersecting)
            
        }
    }
    
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    }
    
    
    
    useEffect(() => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        const observer = new IntersectionObserver(callBackFunction, options) 
        const reviewHeader = containerRef.current
        observer.observe(reviewHeader)
        
    },);



  return (
    <div id="reviews" className="flex flex-col relative items-center bg-[#ffffff] h-[100%] w-[100%] p-[5%]"> 

            
            <div className="reviews-waves">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>

       
                <h1 ref={containerRef} className="mobile-header -tracking-[0.64px] text-[64px] font-bold text-black text-shadow">Reviews</h1> 

           
            <div className="mobile-review-container flex flex-row justify-center h-[100%] w-[100%] flex-wrap p-[5%] no-flicker" >


                {/* 1st review */}
           
                    
                    
                <div onClick={() => window.open('https://www.yelp.com/biz/sydney-nguyen-the-notary-public-rosemead-6')} 
                        className={isVisible ? "mobile-review-bubble bg-button-color h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] m-[2%] shadow-lg cursor-pointer transition-all linear duration-[3000ms] opacity-100 hover:bg-button-color-hover" :
                        "mobile-review-bubble bg-button-color-hover h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] shadow-lg cursor-pointer opacity-0 translate-y-40"
                    }>
                        
                        
                        <div className="flex flex-row justify-start no-flicker">
                            <img className="mr-[10px] rounded-full drop-shadow-lg" src="/assets/images/pfp-4.png" alt="pfp"/>
                            <div className="flex flex-col items-start">
                                <h2 className="mobile-review-name text-[20px] text-[white] text-shadow">Tony S.</h2>
                                <h3 className="text-[white] text-[white]"> Alhambra, CA</h3>
                            </div>
                        </div>
                        <div>
                            <p className="text-[white] mt-[3%] text-shadow">"I needed notary services for a client's prenup. Sydney was responsive, on-time, and very professional. She came prepared with notary acknowledgment forms. Would use her services again."</p>
                        </div>
                </div>

                {/* 3nd review */}

                
                <div onClick={() => window.open('https://www.yelp.com/biz/sydney-nguyen-the-notary-public-rosemead-6')}  
                    className= {isVisible ? "mobile-review-bubble bg-button-color h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] ml-[2%] mt-[2%] mr-[0%] shadow-lg cursor-pointer transition-all linear duration-[3000ms] opacity-100 hover:bg-button-color-hover" :
                    "mobile-review-bubble bg-button-color-hover h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] shadow-lg cursor-pointer opacity-0 translate-y-40"}>
               
                        <div className="flex flex-row justify-start ">
                            <img className=" mr-[10px] rounded-full drop-shadow-lg" src="/assets/images/pfp-4.png" alt="pfp"/>
                            <div className="flex flex-col items-start">
                                <h2 className="mobile-review-name text-[20px] text-[white] text-shadow">Young C.</h2>
                                <h3 className="text-[white]">Rosemead, CA</h3>
                            </div>
                        </div>
                        <div>
                            <p className="text-[white] mt-[3%] text-shadow">"I needed to notarize my newborn application for her birth certificate. I looked up "notary" and Sydney showed up. I called her at 4:10 pm and she picked up right away. Made an appointment for 4:45 pm. She showed up at my house. We signed documents exchanged payment and done in 10 minutes. For the price and not having to drive out it was well worth it. Friendly and very professional."</p>
                        </div>
            
                </div>
         
                {/* 2rd review */}
      
    
                <div onClick={() => window.open('https://www.yelp.com/biz/sydney-nguyen-the-notary-public-rosemead-6')}  
                    className= {isVisible ? "mobile-review-bubble bg-button-color h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] m-[2%] shadow-lg cursor-pointer transition-all linear duration-[2000ms] opacity-100 hover:bg-button-color-hover" :
                    "mobile-review-bubble bg-button-color-hover h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] shadow-lg cursor-pointer opacity-0 translate-y-40"}>
            
                        <div className="flex flex-row justify-start">
                            <img className="rounded-full mr-[10px] drop-shadow-lg h-[60px] w-[60px]" src="/assets/images/pfp-2.jpg" alt="pfp"/>
                            <div className="flex flex-col items-start">
                                <h2 className="mobile-review-name text-[20px] text-[white] text-shadow">Nhi D.</h2>
                                <h3 className="text-[white]">Irvine, CA</h3>
                            </div>
                        </div>
                        <div>
                            <p className="mt-[3%] text-[white] text-shadow">"Sydney was a pleasant to work with, young but very professional. She was able to accommodate my last minute meeting request. The whole notary signature completed within 10-15 minutes. Highly recommend Sydney!"</p>
                        </div>
                
                </div>


           

         
                
                {/* 4th review */}
                <div onClick={() => window.open('https://www.yelp.com/biz/sydney-nguyen-the-notary-public-rosemead-6')}  
                    
                    className= {isVisible ?   "mobile-review-bubble bg-button-color h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] m-[2%] shadow-lg cursor-pointer transition-all linear duration-[3000ms] opacity-100 hover:bg-button-color-hover" :
                    "mobile-review-bubble bg-button-color-hover h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] mt-[2%] shadow-lg cursor-pointer opacity-0 translate-y-40" }>
                    
                
                        <div className="flex flex-row justify-start">
                            <img className="mr-[10px] rounded-full drop-shadow-lg h-[60px] w-[60px]" src="/assets/images/pfp-3.png" alt="pfp"/>
                            <div className="flex flex-col items-start">
                                <h2 className="mobile-review-name text-[20px] text-[white] text-shadow">Peter L.</h2>
                                <h3 className="text-[white]">Arcadia, CA</h3>
                            </div>
                        </div>
                        <div>
                            <p className="text-[white] text-shadow mt-[3%]">"Found this little gem on yelp. I was in need of a notary ASAP. Called Sydney up and she answered my phone right away. We met up at Starbucks and was done in under 10 mins. Sydney was very nice and professional. If I ever need a notary again she's going to be the one."
Thanks Sydney!
                            </p>
                        </div>
                 
                </div>
                {/* 5th review*/}
                <div onClick={() => window.open('https://www.yelp.com/biz/sydney-nguyen-the-notary-public-rosemead-6')}  
                    className= {isVisible ?   "mobile-review-bubble bg-button-color h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] mt-[2%] mr-[1%] shadow-lg cursor-pointer transition-all linear duration-[3000ms] opacity-100 hover:bg-button-color-hover":
                    "mobile-review-bubble bg-button-color-hover h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] mt-[2%] shadow-lg cursor-pointer opacity-0 translate-y-40" }>
               
                        <div className="flex flex-row justify-start">
                            <img className="mr-[10px] rounded-full drop-shadow-lg" src="/assets/images/pfp-4.png" alt="pfp"/>
                            <div className="flex flex-col items-start">
                                <h2 className="mobile-review-name text-[20px] text-[white] text-shadow">Rod P.</h2>
                                <h3 className="text-[white]">Pasadena, CA</h3>
                            </div>
                        </div>
                        <div>
                            <p className="text-[white] text-shadow mt-[3%]">
                            "I used Sydney for some slightly complex out-of-state documents I needed notarized. She came right on time, did the work quickly and the prices were more than fair. She's smart and very pleasant to work with. In fact, I'll be using her again this week. Highly recommended."
                            </p>
                        </div>
               
                </div>


            </div>
    </div>

 
  )
};

export default Reviews;
