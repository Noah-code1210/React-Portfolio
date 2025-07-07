import React, { useRef, useState, useContext } from "react";
import SkinstricPNG from "../assets/Skinstric.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Video from "../Video/PortfolioVideo.mp4";
import { ScrollContext } from "../contexts/ScrollContext.js";

function Experience() {
  const { experienceRef } = useContext(ScrollContext);

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
      <div ref={experienceRef} id="section experience__section experience">
        <div className="experience__container container">
          <h1 className="section__title">Experience</h1>
          <div className="experience__info">
            <div className="experience__text">
              <h2 className="experience__intern--title">
                Skinstric Virtual Internship
              </h2>
              <h3 className="experience__para--job">
                For this virtual internship, I built a responsive website for a
                skincare brand known for their AI-driven solutions. I used React
                as the main framework, along with other tech like HTML, CSS, and
                JavaScript to design and develop user-friendly interfaces. To
                make the experience easier for the users, I allowed them to
                either scan an already existing image of themself from their
                camera roll, or snap a picture through the website right then
                and there!
              </h3>
              <br />
              <h3 className="experience__para--learn">
                Throughout this internship, I gained hands-on experience
                collaborating remotely, implementing best practices, and
                aligning tech solutions with the brand’s innovative AI-focused
                mission. On top of getting hands-on experience, I was also able
                to learn a lot more about coding, and how it can change
                depending on the environment or job that youre working in.
              </h3>
            </div>
            <div className={`extra__info--wrapper ${showVideo ? "show" : ""}`}>
              <div className="extra__info">
                <h1 className="skinstric__technologies--title">
                  Technologies Used:
                </h1>
                <br />
                <ul className="skinstric__technologies--list">
                  <li className="skinstric__technologies">React</li>
                  <li className="skinstric__technologies">HTML</li>
                  <li className="skinstric__technologies">CSS</li>
                  <li className="skinstric__technologies">JavaScript</li>
                  <li className="skinstric__technologies">Git</li>
                  <li className="skinstric__technologies">Vercel</li>
                </ul>
                <h1 className="skinstric__technologies--title timeframe__title">
                  Timeframe:
                </h1>
                <h2 className="timeframe__info">May 2025 - July 2025</h2>
                <div className="video__playing">Video...</div>
                <div className="responsive__pixels">
                  **RESPONSIVE FROM 1470PX OR LESS**
                </div>
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
                <div className="live__link--title">
                  Live Link
                </div>
              </div>
              <div className="vercel__link" onClick={navToGithub}>
                <FontAwesomeIcon icon={faGithub} className="link" />
                <div className="live__link--title">
                  Github Link
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
