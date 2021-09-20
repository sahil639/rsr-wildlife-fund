import React from 'react'
import '../App.css'
import { Button } from './Button'
// import HeroImg from './'
import './HeroSection.css';

function HeroSection() {
    return (
        <div>
            <div className="hero-container">
                {/* <img src={ HeroImg } alt="me" /> */}
                <h1>Fight World Hunger</h1>
                <p>By Donating Vadapaav for Rohan Sahil and Ramprakash</p>
                <Button 
                  className="btns" 
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
                  >
                      Donate  
                  </Button>
            </div>
           </div>
    );
}

export default HeroSection;
