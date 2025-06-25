import React from "react";
import Library from "../assets/Library.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Projects() {

  function navToLibrary() {
    window.open("https://ecommerce-w-react.vercel.app/")
  }
  function navToLibraryGit() {
    window.open("https://github.com/Noah-code1210/Library-React")
  }

  return (
    <div>
      <div id="section">
        <div className="container projects__container">
          <div className="section__title">Projects</div>
          <div className="project__info">
            <div className="project__wrapper">
              <div className="project__text">
                <div className="project__title">Library</div>
                <div className="project__description">
                  For this project, I created an online book store that displays
                  a handful of highly rated books for people to view and look
                  through. I also implemented a checkout feature, where the user
                  can add their favorite books to the cart, and see how much it
                  would cost to purchase.
                </div>
                <br />
                <div className="technologies__used--title">
                  Technologies Used:
                  <div className="technologies__used--para">
                    React, Git, HTML, CSS, JS
                  </div>
                </div>
                <div className="project__links">
                  <div className="vercel__project--link">
                    <FontAwesomeIcon icon={faLink} className="link" onClick={navToLibrary} />
                  </div>
                  <div className="vercel__project--link">
                    <FontAwesomeIcon icon={faGithub} className="link" onClick={navToLibraryGit} />
                  </div>
                </div>
              </div>
              <img src={Library} alt="" className="project__img" />
            </div>
            <div className="project__wrapper">
              <div className="project__title">Skinstric A.I</div>
              <img src="" alt="" className="project__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
