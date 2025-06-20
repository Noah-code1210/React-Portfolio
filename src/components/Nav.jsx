import React, { useState } from "react";
import myLogo from "../assets/mylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "react-router-dom";

function Nav() {


  return (
    <>
      <div id="section nav__section">
        <div className="container">
          <div className="row">
            <figure className="nav__img--wrapper">
              <img src={myLogo} alt="" className="nav__img" />
            </figure>
            <ul className="nav__link--list">
              <li className="nav__link">
                <a href="#gallery">Gallery</a>
              </li>
              <li className="nav__link">
                <a href="#projects">Projects</a>
              </li>
              <li className="nav__link">
                <a href="#contact">Contact</a>
              </li>
              <div className="dark-or-light" >
                <FontAwesomeIcon icon="circle-half-stroke" className="dark-or-light__img" />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
