import React from "react";
import "./Hero.css";
import profile_img from "../../assets/supriya1.webp";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Supriya Silwal,</span> Final year Geomatics Engineering
        Student at KU.
      </h1>
      <p>
        A Geomatics Engineering student with experience in GIS analysis, remote
        sensing, and topographic surveying.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
