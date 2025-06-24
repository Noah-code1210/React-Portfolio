import React, { useState } from "react";
import SkinstricPNG from "../assets/Skinstric.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Video from "../Video/PortfolioVideo.mp4"

function Experience() {
  const [showVideo, setShowVideo] = useState(false);
  const [blurImg, setBlurImg] = useState(false);

  function handleMouseEnter() {
    setShowVideo(true);
    setBlurImg(true);
  }
  function handleMouseLeave() {
    setShowVideo(false);
    setBlurImg(false);
  }

  function navToAI() {
    window.open("https://skinstric-ai-gules.vercel.app/");
  }

  function navToGithub() {
    window.open("https://github.com/Noah-code1210/Skinstric-AI");
  }

  return (
    <>
      <div id="section experience__section">
        <div className="container">
          <h1 className="section__title">Experience</h1>
          <div className="experience__info">
            <div className="experience__text">
              <h2 className="experience__intern--title">
                Skinstric Virtual Internship
              </h2>
              <h3 className="experience__para">
                For this virtual internship, I built a responsive website for a
                skincare brand known for their AI-driven solutions. I used
                React.js as the main framework, along with other tech like HTML,
                CSS, and JavaScript to design and develop user-friendly
                interfaces.
                <br />
                <br />
                Throughout this internship, I gained hands-on experience
                collaborating remotely, implementing best practices, and
                aligning tech solutions with the brand’s innovative AI-focused
                mission.
              </h3>
            </div>
            <div className={`video__wrapper ${showVideo ? "show" : ""}`}>
              <div className="video">
                <video src={Video} autoPlay className="video__edit"/>
              </div>
            </div>
            <div
              className={`experience__img--wrapper ${blurImg ? "blur" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="experience__img--title">Skinstric A.I</div>
              <img src={SkinstricPNG} alt="" className="experience__img" />
            </div>
            <div className="live__links">
              <div className="vercel__link" onClick={navToAI}>
                <FontAwesomeIcon icon={faLink} className="link" />
              </div>
              <div className="vercel__link" onClick={navToGithub}>
                <FontAwesomeIcon icon={faGithub} className="link" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
