import React, { useState, useEffect, useRef, useCallback } from "react";


import axios from 'axios';



// GOOGLE MAPS AUTO COMPLETE API
// https://betterprogramming.pub/the-best-practice-with-google-place-autocomplete-api-on-react-939211e8b4ce
let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
 
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);

};

function handleScriptLoad(setQuery, setZip, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    //   <input id="autocomplete"> </input>
    autoCompleteRef.current,
    //  tweak types from: 
    //  https://developers.google.com/maps/documentation/places/web-service/supported_types 
    { types: ["address"], componentRestrictions: { country: "us" } }
  );
    // basic-data free tier 
    // https://developers.google.com/maps/documentation/places/web-service/usage-and-billing#basic-data
  autoComplete.setFields(["address_components", "formatted_address"]);
  
  // when you select the address 
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(setQuery, setZip)
  );
}

async function handlePlaceSelect(setQuery, setZip) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  try {
      // get the postal code zip
      for (let i = 0; i < addressObject.address_components.length; i++){
            if (addressObject.address_components[i].types[0] === "postal_code"){
                
                setZip(addressObject.address_components[i].long_name)

               
            }
      }  

  } catch {
      console.log('error querying zip')
  }
  console.log(addressObject)
  console.log(query)
  setQuery(query);

}




const Fees = () => {
    // VARIABLES TO DISPLAY RESULTS WITH
    let url = "https://snnotary-website.herokuapp.com/fees"
    // let url = "https://localhost:5000/fees"

    const mortgageOptions = ["Misc.", "Single Page", "Refinance", "Purchase", "Seller's Package", "Home Equity Loan", "Reverse Mortgage"]
  
    const dateOptions = ["ASAP", "Within this week", "Within this month"]

    const feeEstimates = ["$75 - $100", "$125 - $150", "$150 - $200", "$200 - $250"]

    const [estimateInputs, setEstimateInputs] = useState({})
    // GOOGLE MAPS ADDRESS QUERY
    const [query, setQuery] = useState("");
    // ZIP VARIABLE SENT TO BACKEND FOR DISTANCE CALCULATIONS 
    const [zip, setZip] = useState("");

    const [distanceMiles, setDistanceMiles] = useState(null)

    const autoCompleteRef = useRef(null);

    const [totalFee, setTotalFee] = useState([]) 

    const [show, setShow] = useState(true)
    

    
    const calculateDistance = useCallback((url) => {
      
      axios.post(url, {
        zip: zip,
        
      }).then((response) => {
        console.log(`miles calculated ${response.data} ${typeof(response.data)}`)
  
        setDistanceMiles(response.data)
        
      })

    }, [zip])

    
    
    useEffect(() => {
      calculateDistance(url)
    }, [calculateDistance, url])




    // FEE CALCULATOR SUBMIT BUTTON 
    const handleSubmit = (event) => { 
        event.preventDefault()
        setShow(false)
       
        let totalPoints = 0  
        // creates a point system to determine the scoring of what fee gets displayed
        // FINAL SCORE -- FEE RESULTS
        // 0           =>  $75 - $100
        // 1 - 3       =>  $125 - $150
        // 4 - 7       =>  $150 - $200
        // 8 +         =>  $200 - $250

        // SCORING FACTORS BELOW 
        
        // DISTANCE/MILES RULES (one-way trip)
        // miles <= 15 => +1
        // miles <= 25 => +2
        // miles >  25 => +3
        
        // DOC TYPE RULES 
        // single-page  =====================> resets 0  (regardless of other points added it will apply the score = 0 rule)
        // misc docs   ===========================> + 1, 
        // Refinance, HELOC, Purchase, & Seller's => +2, 
        //  Reverse Mortgage ======================> +3, 

        // URGENCY RULES 
        // asap ===========> +3
        // within a week =>  +2
        // within a month => +1 

        // SCANBACK RULES
        // yes => +1
        // no  => +0

    
        let miles = calculateDistance(url)
        console.log(miles)

        // MILES CALCULATIONS


        // console.log(`${distanceMiles} miles from the calculations`)
        console.log(`distance miles: ${distanceMiles} type: ${typeof(distanceMiles)}`)
        if (true) {
          if (distanceMiles <= 15) {
            totalPoints += 1
            console.log("+1 points added for less than or equal 15 miles")
          }
          else if (distanceMiles <= 25) {
            totalPoints += 2
            console.log("+2 points added for less than or equal 25 miles")
          }
          else {
            totalPoints += 3
            console.log("+3 points added for over 25 miles")
          } 
        }
        
        // DOCTYPE CALCULATION
        
        const selectedMortgage = document.getElementById("mortgage").value
    
        const selectedMortgageText = document.getElementById("mortgage").options[selectedMortgage].innerText
        let isSinglePageDoc = false
     
        if (selectedMortgage) {
          
          const MISC = "0"
          const SINGLEPAGE = "1"
          const REVERSE = "6"
          if (selectedMortgage === SINGLEPAGE) {
            isSinglePageDoc = true
            console.log("single page set to true ignore all other points added")
          } 
          else if (selectedMortgage === MISC) {
            totalPoints += 1
            console.log("+1 points added for Misc")
          } 
          else if (selectedMortgage === REVERSE) {
            totalPoints += 3
            console.log("+3 points added for Reverse Mortgage")
          } else {
            totalPoints += 2
          
            console.log(`+2 points added for ${selectedMortgageText}`)
          }
        }

        // URGENCY CALCULATIONS
        const selectedDay = document.getElementById("urgency").value
        const selectedDayText = document.getElementById("urgency").options[selectedDay].innerText
        if (selectedDay) {
          const ASAP = "0"
          const WEEK = "1"
 
          if (selectedDay === ASAP) {
            totalPoints += 3  
            console.log("+3 points added for ASAP")
          } else if (selectedDay === WEEK) {
            totalPoints += 2
            console.log("+2 points added for within this week")
          } else {
            totalPoints += 1
            console.log("+1 points added for within this month")
          }

        }

        // SCANBACK CALCUATIONS
        let scanbacks;
        if(document.getElementById('scanbackYes').checked) {
          totalPoints += 1
          scanbacks = true
          console.log("+1 points added for scanbacks")

        } else {
          scanbacks = false
          console.log("+0 points added for no scanbacks")
        } 

        
        // SINGLE PAGE DOC 0 SCOREBOARD RULE
        if (isSinglePageDoc === true) {
          totalPoints = 0
          console.log("total points reset back to 0 due to single page doc selected")
        }

      
        console.log(`TOTAL POINTS: ${totalPoints}`)

        if (totalPoints === 0) {

          setTotalFee(feeEstimates[0])
        } else if ( totalPoints <= 3) {
          setTotalFee(feeEstimates[1])
        } else if (totalPoints <= 7) {
          setTotalFee(feeEstimates[2])
        } else {
          setTotalFee(feeEstimates[3])
        }
              
        // use this to dynamically create the details section of the results
        setEstimateInputs({
          mortgage: selectedMortgageText,
          urgency: selectedDayText,
   
          scans: scanbacks


        })



     
    }

    // Navigates back to home page
    const handleRedirect = (e) => {
      e.preventDefault()
      window.open('/#contact')
    }
    
    // GO BACK BUTTON
    const handleGoBack = (e) => {
      e.preventDefault()

      setEstimateInputs({})
      setTotalFee([])
      // set zip triggers the use effect for the google maps autocomplete input field, 
      // without this setZip changing it will cause the autocomplete to not work
      setZip("")
      setShow(true)

    }

    useEffect(() => {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
        () => handleScriptLoad(setQuery, setZip, autoCompleteRef)
      );
      
    }, [zip]);






  return (
    <div>


        <div className="flex flex-col justify-center items-center h-[100%] w-[100%]">

            <h1 className="mobile-header -tracking-[0.64px] text-[50px] text-[#123456] leading-[52px] mb-[50px] mt-[50px] font-bold text-shadow">Fee Calculator</h1>
            <div className="flex flex-col items-start w-[100%] h-[50%] px-[0%] md:px-[20%] lg:px-[30%]">
              
              {
              
                // FEE CALCULATOR INPUT FORM
                show ? 

                <form onSubmit={(e) => handleSubmit(e)} className=" flex flex-col items-center justify-center bg-white rounded-[10px] w-[100%] h-[100%] px-[5%] py-[2%] gap-y-[10px] shadow-lg">
                    <label className="flex flex-col items-start justify-start font-semibold text-[20px]">Enter Appointment Address:</label>
                      <input 
                          id="autocomplete" 
                          placeholder="1234 S Baldwin Avenue, Arcadia, CA 91007 USA"
                          ref={autoCompleteRef}
                          onChange={event => setQuery(event.target.value)}
                          className="px-[2%] w-[100%] text-center text-[20px] border-solid border-2"
                          required>
                          
                        </input>
                        <label className="font-semibold text-[20px]">Select Closing Package:</label>
                        <select  id="mortgage" className="px-[2%] w-[100%] h-[100%] text-center text-semibold border border-2 text-[20px]" placeholder="Select Mortgage Package" name="types" required>
                                  
                        {   
                            // map(element, index) => [...]

                            mortgageOptions.map((mortgage, index) => <option value={index}>{mortgage}</option>)
                        }
                        </select>
                        <label className="font-semibold text-[20px]">How soon is the appointment?</label>
                        <select id="urgency" className="px-[2%] w-[100%] h-[100%] text-center text-semibold border border-2 text-[20px]" placeholder="Select Mortgage Package" name="types" required>
                                  
                        {   
                            // map(element, index) => [...]
                            
                            dateOptions.map((date, index) => <option value={index}>{date}</option>)
                        }
                        </select>

                        <label className="font-semibold text-[20px]">Are Scanbacks Required?</label>
                        <div className="flex flex-row justify-center items-center gap-x-[10%]">
                          <input id="scanbackYes" name="scanbacks" value="yes" type="radio" required ></input>
                          <label className="text-[20px]">Yes</label>
                          <input id="scanbackNo" name="scanbacks" value="no" type="radio"></input>
                          <label className="text-[20px]">No</label>

                        </div>

                          


          

                    <button className="flex flex-row justify-center items-center w-[100%] shadow-lg rounded-[10px] font-semibold text-[16px] text-white outline-hidden cursor-pointer transition-all ease-in-out duration-200 bg-button-color whitespace-nowrap p-[10px] w-[50%] text-shadow hover:bg-button-color-hover">Submit</button>
                </form> 
                :
                // FEE CALCULATOR RESULTS FORM
                  <div className="flex flex-col items-center justify-center bg-white rounded-[10px] w-[100%] h-[100%] px-[5%] py-[2%] gap-y-[10px] shadow-lg">
                    <h1 className="font-semibold text-[24px]">Your Estimated Fee:</h1>
                    <h1 className="flex justify-center items-center text-[55px] font-bold border-8 w-full border-[#123456] text-shadow">{totalFee}</h1>
                    <h1 className="font-semibold text-[24px]">Based on what you selected: </h1>
              
                    <form className="w-[100%]">
                      {/* based on what you selected div */}
                      <div className="w-[100%] h-[100%]">
                          {/* package type row */}
                          <div className="flex flex-row items-center justify-between w-[100%] bg-gray-300 px-[2%]">

                            <h2 className="text-[20px] ">Package Type:</h2>
                            <h2 className="text-[20px] ">
                              {estimateInputs.mortgage}

                            </h2>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[100%] px-[2%]">

                            <h2 className="text-[20px]">Approx Distance (One-Way): </h2>
                            <h2 className="text-[20px]">

                              {distanceMiles === 0 ? "less than 5 miles / 8 kilometers" : 
                                `${distanceMiles} mi / ${(distanceMiles * 1.6).toFixed(1)} km`
                              }
                                                  
                            </h2>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[100%] bg-gray-300 px-[2%]">

                            <h2 className="text-[20px] ">Urgency: </h2>
                            <h2 className="text-[20px]">

                              {estimateInputs.urgency}
                                                  
                            </h2>
                          </div>
                          <div className="flex flex-row justify-between items-center w-[100%] px-[2%]">

                            <h2 className="text-[20px]">Scanbacks: </h2>
                            <h2 className="text-[20px]">

                              {estimateInputs.scans ? "Yes" : "No"}
                                                  
                            </h2>
                          </div>                          

                          <div className="flex items-center justify-center">
                      
                            <p className=""><span className="font-bold text-[red]">*</span>PLEASE NOTE: This is only an estimate as other factors may affect the final fee.</p>
                          </div>
                          <div className="flex flex-row items-between justify-around gap-x-[5%] px-[5%] py-[2%]">
                            <button onClick={(e) => handleGoBack(e) }className="flex flex-row justify-center items-center w-[100%] shadow-lg rounded-[10px] font-semibold text-[16px] text-white outline-hidden cursor-pointer transition-all ease-in-out duration-200 bg-button-color whitespace-nowrap p-[10px] text-shadow hover:bg-button-color-hover">Go Back</button>
                            <button onClick={(e) => handleRedirect(e)} className="flex flex-row justify-center items-center w-[100%] shadow-lg rounded-[10px] font-semibold text-[16px] text-white outline-hidden cursor-pointer transition-all ease-in-out duration-200 bg-button-color whitespace-nowrap p-[10px] text-shadow hover:bg-button-color-hover">Contact</button>
                

                          </div>

                      </div>
                      
                    </form>

                  </div>
            }
            </div>


        </div>
    </div>

  );
};

export default Fees;
