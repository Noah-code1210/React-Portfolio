import React, { useContext } from "react"; // <--- Import useContext
import Library from "../assets/Library.png";
import SkinstricProject from "../assets/SkinstricProjects.png";
import NFT from "../assets/NFT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { ScrollContext } from "../contexts/ScrollContext.js"; // <--- Import ScrollContext

function Projects() {
  // <--- Use useContext to get the specific ref for this component
  const { projectsRef } = useContext(ScrollContext);

  function navToLibrary() {
    window.open("https://ecommerce-w-react.vercel.app/");
  }
  function navToLibraryGit() {
    window.open("https://github.com/Noah-code1210/Library-React");
  }
  function navToSkinstric() {
    window.open("https://skinstric-ai-gules.vercel.app/");
  }
  function navToSkinstricGit() {
    window.open("https://github.com/Noah-code1210/Skinstric-AI");
  }
  function navToNFT() {
    window.open("https://noah-nft-internship.vercel.app/");
  }
  function navToNFTGit() {
    window.open("https://github.com/Noah-code1210/Noah-NFT-Internship");
  }

  return (
    <div>
      {/* <--- Attach the ref obtained from context to the main wrapping div/section */}
      <div ref={projectsRef} id="section">
        {" "}
        {/* You can keep the existing ID */}
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
                    React, Git, HTML, CSS, JS, Vercel
                  </div>
                </div>
                <div className="project__links">
                  <div className="vercel__project--link">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="link"
                      onClick={navToLibrary}
                    />
                  </div>
                  <div className="vercel__project--link">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="link"
                      onClick={navToLibraryGit}
                    />
                  </div>
                </div>
              </div>
              <img src={Library} alt="" className="project__img" />
            </div>
          </div>
          <div className="project__info">
            <div className="project__wrapper">
              <div className="project__text">
                <div className="project__title">Tesla Clone</div>
                <div className="project__description">
                  This project was mainly for the fun of it, but I also used it
                  to learn more about Next.js and its capabilites. To make it
                  more complex, I implemented not only a login feature, but also
                  a "Create Account" feature which is fully functional as well. 
                </div>
                <br />
                <div className="technologies__used--title">
                  Technologies Used:
                  <div className="technologies__used--para">
                    Next.js, Git, HTML, CSS, JS, Vercel
                  </div>
                </div>
                <div className="project__links">
                  <div className="vercel__project--link">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="link"
                      onClick={navToSkinstric}
                    />
                  </div>
                  <div className="vercel__project--link">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="link"
                      onClick={navToSkinstricGit}
                    />
                  </div>
                </div>
              </div>
              <img src={SkinstricProject} alt="" className="project__img" />
            </div>
          </div>
          <div className="project__info">
            <div className="project__wrapper">
              <div className="project__text">
                <div className="project__title">Ultraverse NFT</div>
                <div className="project__description">
                  This project was also for an internship, and its main purpose
                  was to gain more knowledge on fetching API data and displaying
                  it in multiple different places.
                </div>
                <br />
                <div className="technologies__used--title">
                  Technologies Used:
                  <div className="technologies__used--para">
                    React, Git, HTML, CSS, JS, Vercel, Node.js
                  </div>
                </div>
                <div className="project__links">
                  <div className="vercel__project--link">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="link"
                      onClick={navToNFT}
                    />
                  </div>
                  <div className="vercel__project--link">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="link"
                      onClick={navToNFTGit}
                    />
                  </div>
                </div>
              </div>
              <img src={NFT} alt="" className="project__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
