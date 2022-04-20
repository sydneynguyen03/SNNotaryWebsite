import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  
    const location = useLocation();
    const [locationPath, setLocationPath] = useState(location.pathname)
    useEffect(() => {
        console.log(location)
    },[locationPath])
    return (
        <>
        {
        locationPath === '/legal' || locationPath === '/fees' || locationPath === '/about' ? '' 
        :

        <div className="h-[100%] w-[100%] flex flex-row justify-center">
            <a href="/legal" className="text-[125%]">

                Privacy Policy
            </a>
        </div>
        }
        </>
  )
}

export default Footer