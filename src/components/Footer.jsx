import React from "react";
import Logo from "../assets/mylogo.png";
import { Link } from "react-router-dom";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling animation
    });
  };
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
        <div className="container footer__container">
          <div className="logo__wrapper">
              <img src={Logo} alt="" className="footer__img" onClick={handleScrollToTop} />
            <div className="footer__link--list">
              <div className="footer__link" onClick={navToGithub}>
                Github
              </div>
              <div className="footer__link" onClick={navToLinkedIn}>
                LinkedIn
              </div>
              <div className="footer__link">Contact</div>
              <div className="footer__link" onClick={navToResume}>
                Resume
              </div>
            </div>
            <div class="footer__copyright">Copyright © 2025 Noah Cole</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
