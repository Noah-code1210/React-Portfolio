import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import Location from "../assets/Location.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function navToGithub() {
    window.open("https://github.com/Noah-code1210");
  }

  function navToLinkedIn() {
    window.open("https://www.linkedin.com/in/noah-cole-87241b320/");
  }

  function navToResume() {
    window.open(
      "https://docs.google.com/document/d/1aCI2q2tIfYTkqJ115jND99BdnN1DR0Mu/edit?usp=sharing&ouid=110260463731260459986&rtpof=true&sd=true"
    );
  }

  return (
    <div>
      <div id="section">
        <div className="container header__container">
          <div className="header__row">
            <div className="header__info">
              <h1
                className="header__title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Hey
                <br />
                <span className="dark__blue">I'm Noah.</span>
              </h1>
              <p
                className="location"
                data-aos="fade-up"
                data-aos-duration="1250"
              >
                <img src={Location} alt="" className="location__img" />
                Philadelphia, PA
              </p>
              <p
                className="header__para"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                I'm a
                <span className="dark__blue"> frontend software engineer </span>
                who loves to design and build innovative web applications!
                Here's a bit more
                <span className="dark__blue"> about me.</span>
              </p>
              <div
                className="social__link--buttons"
                data-aos="fade-up"
                data-aos-duration="1750"
              >
                <button className="github btn" onClick={navToGithub}>
                  <FontAwesomeIcon icon={faGithub} className="github__img" />
                </button>
                <button className="linkedin btn" onClick={navToLinkedIn}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="linkedin__img"
                  />
                </button>
                <button className="resume btn" onClick={navToResume}>
                  <FontAwesomeIcon icon={faFile} className="resume__img" />
                </button>
              </div>
            </div>
            <div className="header__scroll--btns">
              <button
                className="experience hover-btn"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Experience
              </button>
              <button
                className="tech hover-btn"
                data-aos="fade-left"
                data-aos-duration="1250"
              >
                Technology
              </button>
              <button
                className="projects hover-btn"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                Projects
              </button>
            </div>
            <div className="envelope__btn">
              <FontAwesomeIcon icon={faEnvelope} className="envelope__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
