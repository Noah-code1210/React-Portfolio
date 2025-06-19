import React from "react";
import CoffeeMug from "../assets/CoffeeMug.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, github} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";


function Header() {

  function navToGithub() {
    window.open("https://github.com/Noah-code1210")
  }

  function navToLinkedIn() {
    window.open("https://www.linkedin.com/in/noah-cole-87241b320/")
  }

  function navToResume() {
    window.open("https://docs.google.com/document/d/1aCI2q2tIfYTkqJ115jND99BdnN1DR0Mu/edit?usp=sharing&ouid=110260463731260459986&rtpof=true&sd=true")
  }

  return (
    <div>
      <div id="section">
        <div className="container header__container">
          <div className="header__row">
            <div className="header__info">
              <h1 className="header__title">
                Hey
                <br />
                <span className="dark__orange">I'm Noah.</span>
              </h1>
              <p className="header__para">
                I'm a
                <span className="dark__orange">
                  {" "}
                  frontend software engineer{" "}
                </span>
                who loves to design and build innovative web applications using
                various technologies! Here's a bit more
                <span className="dark__orange"> about me.</span>
              </p>
              <div className="social__link--buttons">
                <button className="github btn" onClick={navToGithub}>
                  <FontAwesomeIcon icon={faGithub} className="github__img"/>
                </button>
                <button className="linkedin btn" onClick={navToLinkedIn}>
                  <FontAwesomeIcon icon={faLinkedin} className="linkedin__img"/>
                </button>
                <button className="resume btn" onClick={navToResume}>
                  <FontAwesomeIcon icon={faFile} className="resume__img" />
                </button>
              </div>
            </div>
            <div className="header__img">
              <img src={CoffeeMug} alt="" />
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
