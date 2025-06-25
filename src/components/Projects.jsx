import React from "react";
import Library from "../assets/Library.png";

function Projects() {
  return (
    <div>
      <div id="section">
        <div className="container projects__container">
          <div className="section__title">Projects</div>
          <div className="project__info">
            <div className="project__wrapper">
              <div className="project__title">Library</div>
              <div className="project__description"></div>
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
