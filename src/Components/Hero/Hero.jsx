import React from "react";
import "./Hero.css";
import arrow_icon from '../Assets/Arrow 7 Icons.png'
import hand_icon from '../Assets/hand-icon.png'
import hero_image from '../Assets/hero-image.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>new <span><img src={hand_icon} alt="" /></span></p>
          
        </div>
        <p>collections</p>
        <p>For Everyone</p>
     
      <div className="hero-latest-btn">
        <div>Latest Colections</div>
        <img src={arrow_icon}  style={{width: "40px", height: "40px"}} alt="" />
      </div>
       </div>
      <div className="hero-right">
        <img src={hero_image} style={{width: "800px", height: "800px"}} alt="" />
      </div>
    </div>
  );
};

export default Hero;
