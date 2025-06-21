import React, { useState } from "react";
import myLogo from "../assets/mylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useSearchParams } from "react-router-dom";

function Nav() {
  function navToResume() {
    window.open(
      "https://docs.google.com/document/d/1aCI2q2tIfYTkqJ115jND99BdnN1DR0Mu/edit?usp=sharing&ouid=110260463731260459986&rtpof=true&sd=true"
    );
  }

  return (
    <>
      <div id="section nav__section">
        <div className="container nav__container">
          <div className="row">
            <figure className="nav__img--wrapper">
              <img src={myLogo} alt="" className="nav__img" />
            </figure>
            <ul className="nav__link--list">
              <Link to="/aboutMe">
                <li className="nav__link">
                  <a href="#aboutMe">About Me</a>
                </li>
              </Link>
              <li className="nav__link">
                <a href="#projects" onClick={navToResume}>
                  Resume
                </a>
              </li>
              <div className="dark-or-light">
                <FontAwesomeIcon
                  icon="circle-half-stroke"
                  className="dark-or-light__img"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
