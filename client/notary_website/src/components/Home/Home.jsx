import React, { useState } from 'react';
import { HeroSection, Process, Services, Reviews, Contact } from '../index'

const Home = () => {

  const [ isVisible, setIsVisible ] = useState(false)
  return (
      <div>
          <HeroSection/>
          <Process/>
          <Services/>

          <Reviews isVisible={isVisible} setIsVisible={setIsVisible}/>
          <Contact isVisible={isVisible} setIsVisible={setIsVisible}/>
      </div>
  );
};

export default Home;
