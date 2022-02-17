import React, { useEffect, useState } from 'react';
import { FaSortUp } from 'react-icons/fa'
const ScrollUpButton = ( ) => {
    const [ isVisible, setIsVisible ] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
      

        if (position > 100) {
            setIsVisible(true)
        }
        if (position < 100) {
            setIsVisible(false)
        }
    }

    const handleScrollButton = (e) => {
        e.preventDefault()
        return window.scrollTo(0,0)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])
  return (
      <>
        {
            isVisible ? 
            <div className="hidden lg:opacity-[100] lg:flex lg:fixed lg:top-[90%] lg:left-[92%] lg:h-[100%] lg:w-[100%] lg:z-[1300] lg:transition-all lg:linear lg:duration-700 ">
                <a href="/" onClick={(e) => handleScrollButton(e)} className='block border-solid border-2 border-white rounded-[10px] bg-[#123456] h-[50px] w-[55px] text-[50px] pt-[10px] text-white'><FaSortUp/></a>
            </div> : 
            <div className="opacity-[0] flex fixed top-[85%]  left-[92%] h-[100%] w-[100%] z-[1300] transition-all linear duration-700 ">
                <a href="#javascript" onClick={() => {window.scrollTo(0,0)}} className='block border-solid border-2 border-white rounded-[10px] bg-[#123456] h-[50px] w-[55px] text-[50px] pt-[10px] text-white'><FaSortUp/></a>
            </div>
            
        }
      </>
    
  );
};

export default ScrollUpButton;
