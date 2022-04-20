import React, { useState, useEffect } from 'react'
import LostPage from '../LostPage/LostPage'

const Form5 = () => {
     // form data to be sent back
     const [data, setData] = useState({
      // General Information Page 1
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      phone: '',
      // Personal Information Page 2
      address: '',
      street_number_route: '',
      street_locality: '',
      street_state: '',
      street_zip: '',
      street_apt_unit: '',
      // Notary Information Page 3
      commission_number: '',
      commission_expiration_date: '',
      notary_experience: '',
      signings_completed: '',
      // Signing Agent Information Page 4
      dual_tray: null, 
      scanbacks: null,
      max_distance_radius: null,
      languages: null,
    })
  
  
    useEffect(() => {
  
      console.log(data)
  
    }, [data])
  
    let first_name = localStorage.getItem('first_name')
    let last_name = localStorage.getItem('last_name')
    let middle_name = localStorage.getItem('middle_name')
    let email = localStorage.getItem('email')
    let phone = localStorage.getItem('phone')
    let address = localStorage.getItem('address')
    let street_number_route = localStorage.getItem('street_number_route')
    let street_locality = localStorage.getItem('street_locality')
    let street_state = localStorage.getItem('street_state')
    let street_zip = localStorage.getItem('street_zip')
    let street_apt_unit = localStorage.getItem('street_apt_unit')
    let commission_number = localStorage.getItem('commission_number');
    let commission_expiration_date = localStorage.getItem('commission_expiration_date')
    let notary_experience = localStorage.getItem('notary_experience');
    let signings_completed = localStorage.getItem('signings_completed');
    let max_distance_radius = localStorage.getItem('max_distance_radius');
    let dual_tray = localStorage.getItem('dual_tray');
    let scanbacks = localStorage.getItem('scanbacks');
    let languages = localStorage.getItem('languages');
    let selected_Languages = localStorage.getItem('selected_Languages')

  return (
    <div className="flex flex-col justify-center items-center h-[100%] w-[100%]" >
      <div className="flex flex-col justify-center items-center h-[100%] w-[100%] px-[0%] mt-[15%] lg:mt-[5%] lg:px-[10%] pb-[10%]">
        <div className="flex flex-col justify-center items-center w-[100%] h-[100%] mt-[20%] md:mt-[10%]">
            <h1 className="flex flex-col justify-center items-center tracking-[1px] text-center text-[250%] px-[10%] lg:text-[50px] leading-[52px] font-bold text-black text-shadow ">
              Notary Signing Agent Profile
            </h1>
            <h2 className="flex flex-col justify-center items-center tracking-[1px] text-center text-[150%] lg:text-[30px] leading-[52px] font-bold text-black text-shadow mt-[1%]">
              Step 5 of 5
            </h2>
            <h2 className="flex flex-col justify-center items-center tracking-[1px] text-center text-[150%] lg:text-[20px] leading-[52px] font-bold text-black text-shadow">
              Please review your information carefully before submitting.
            </h2>
        </div>
        {/* All info from form 1 - 4 */}
        <div className="flex flex-col justify-center items-center w-[100%] h-[100%] border-t-2 border-l-2 border-r-2">
          {/* Contact Info - Form 1 */}
          <div className="flex flex-col justify-center items-start w-[100%] h-[100%] px-[5%] pb-[3%] border-b-2">
            <h2 className="tracking-[1px] text-center font-sans text-[150%] lg:text-[30px] leading-[52px] font-semibold text-black mt-[5%]">
              Contact Information 
            </h2>
            {/* holds the contact information */}
            <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
              {/* first, middle, last name */}
              <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                {/* first name */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%] border-2 px-[1%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  First Name
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {first_name}
                  </h2>
                </div>
                {/* middle name */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%] border-y-2  px-[1%]">
                  {
                    (middle_name === null) || (middle_name === "") ?
                    <>
                      <h2 className="flex flex-col justify-start items-center tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black font-semibold">
                      Middle Name
                      </h2>
                      <h2 className="invisible flex flex-col justify-start items-center tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                      Middle Name
                      </h2>
                    </>
                    :
                    <>
                      <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                      Middle Name
                      </h2>
                      <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                      {middle_name}
                      </h2>
                    </>
                  }
                </div>
                {/* last name */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%] border-2 px-[1%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Last Name
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {last_name}
                  </h2>
                </div>
              </div>
            </div>
              {/* phone and email */}
              <div className="flex flex-row justify-center items-center w-[100%] h-[100%] border-x-2">
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Email
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {email}
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Phone
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {phone}
                  </h2>
                </div>
              </div>
          </div>
          {/* address info - form 2 */}
          <div className="flex flex-col justify-center items-start w-[100%] h-[100%] px-[5%]">
            <h2 className="tracking-[1px] text-center font-sans text-[150%] lg:text-[30px] leading-[52px] font-semibold text-black mt-[5%]">
              Address Information 
            </h2>
            {/* holds the address information */}
            <div className="flex flex-col justify-center items-center w-[100%] h-[100%] pb-[3%] border-b-2">
              {/* street address and apt */}
              <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                {/* street address */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Street Address
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {street_number_route}
                  </h2>
                </div>
                {/* apt/unit */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  {
                    (street_apt_unit === null) || (street_apt_unit === "") ?
                    <>
                      <h2 className="flex flex-col justify-start items-center tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black font-semibold">
                      Apt/Unit
                      </h2>
                      <h2 className="invisible flex flex-col justify-start items-center tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                      Apt/Unit
                      </h2>
                    </>
                    :
                    <>
                      <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                      Apt/Unit
                      </h2>
                      <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                      {street_apt_unit}
                      </h2>
                    </>
                  }
                </div>
              </div>
              {/* state, city and zip */}
              <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                {/* state */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  City
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {street_locality}
                  </h2>
                </div>
                {/* state */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  State
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {street_state}
                  </h2>
                </div>
                {/* state */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Zip Code
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {street_zip}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* notary info - form 3 */}
          <div className="flex flex-col justify-center items-start w-[100%] h-[100%] px-[5%]">
            <h2 className="tracking-[1px] text-center font-sans text-[150%] lg:text-[30px] leading-[52px] font-semibold text-black mt-[5%]">
            Notary Information 
            </h2>
            {/* holds the notary information */}
            <div className="flex flex-col justify-center items-center w-[100%] h-[100%] pb-[3%] border-b-2">
              {/* commission number and expiration */}
              <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                {/* commission number */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Commission Number
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {commission_number}
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Commission Expiration Date
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {commission_expiration_date}
                  </h2>
                </div>
              </div>
              {/* notary experience and signings completed */}
              <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                {/* commission number */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Notary Experience
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {notary_experience}
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Signings Completed
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {signings_completed}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* signing agent info - form 4 */}
          <div className="flex flex-col justify-center items-start w-[100%] h-[100%] px-[5%]">
            <h2 className="tracking-[1px] text-center font-sans text-[150%] lg:text-[30px] leading-[52px] font-semibold text-black mt-[5%]">
            Signing Agent Information 
            </h2>
            {/* holds the signing agent information */}
            <div className="flex flex-col justify-center items-center w-[100%] h-[100%] pb-[3%] border-b-2">
              {/* max distance radius and dual-tray */}
              <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                {/* max distance radius */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Do you have a dual-tray printer?
                  </h2>
                  {
                    dual_tray === true ?
                    <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                    Yes
                    </h2> :
                    <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                    No
                    </h2>
                  }
                </div>
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Can you provide scanbacks?
                  </h2>
                  {
                    scanbacks === true ? 
                    <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                    Yes
                    </h2> :
                    <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                    No
                    </h2>
                  }
                </div>
              </div>
              {/* max distance radius and languages */}
              <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                {/* commission number */}
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  What is the max distance (miles) you are willing to dive?
                  </h2>
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                  {max_distance_radius}
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-start w-[100%] h-[100%]">
                  <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-semibold font-sans text-black">
                  Do you speak any other language(s) besides English? 
                  </h2> 
                  { 
                    selected_Languages === true ?
                    <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                    {languages}
                    </h2> :
                    <h2 className="tracking-[1px] text-left text-[150%] lg:text-[20px] leading-[52px] font-sans text-black">
                    None
                    </h2>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form5