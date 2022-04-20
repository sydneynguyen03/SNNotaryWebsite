import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import './styles/globals.css'
import './styles/globals.scss'
import { Mobilebar, Navbar, Home, Fees, ScrollUpButton, About, Privacy, Footer } from './components/index'





const App = () => {

  

    const [show, setShow] = useState(false)


    return (
            <Router>
                <div>
                    {/* https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/
                    
                        
                    */}
                        <ScrollUpButton />
                        <Mobilebar show={show} setShow={setShow}/>
                        <Navbar show={show} setShow={setShow}/>
                        <Routes>
                            <Route path="*" element={<Navigate to="/"/>}/>

                            <Route path="/" exact element={<Home/>}/>
                            <Route path="/fees" exact element={<Fees/>}/>
                            <Route path="/about" exact element={<About/>}/>
                            <Route path="/legal" exact element={<Privacy/>}/>
                            


                            
                        </Routes>
                </div>
            </Router>

              
    )


    
};

export default App;
