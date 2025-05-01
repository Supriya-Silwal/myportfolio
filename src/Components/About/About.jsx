import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/supriya2.webp";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Supriya — I'm a Geomatics Engineering student with a strong
              passion for GIS, remote sensing, and spatial technologies. I enjoy
              working on real-world problems and finding smart, geospatial ways
              to solve them.
            </p>
            <p>
              Learning new tools and turning data into insights is something
              that really excites me.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>C/C++</p>
            </div>
            <div className="about-skill">
              <p>ArcGis/QGIS</p>
            </div>
            <div className="about-skill">
              <p>Remote Sensing</p>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
            </div>
            <div className="about-skill">
              <p>Python</p>
            </div>
            <div className="about-skill">
              <p>Surveying & Data Analysis</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-sub-title">
        <h1>Soft Skills and Team Experience</h1>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Group Project</h1>
          <p>COLLABORATION</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Presentation</h1>
          <p>Skills</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Adaptibility</h1>
          <p>during field conditions</p>
        </div>
      </div>
    </div>
  );
};

export default About;
