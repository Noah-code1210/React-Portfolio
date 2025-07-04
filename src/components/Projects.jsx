import React, { useContext } from "react"; // <--- Import useContext
import Library from "../assets/Library.png";
import Treact from "../assets/Treact.png";
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
  function navToNFT() {
    window.open("https://noah-nft-internship.vercel.app/");
  }
  function navToNFTGit() {
    window.open("https://github.com/Noah-code1210/Noah-NFT-Internship");
  }
  function navToTesla() {
    window.open("https://noah-nft-internship.vercel.app/");
  }
  function navToTeslaGit() {
    window.open("https://github.com/Noah-code1210/Tesla-clone-next");
  }
  function navToTreact() {
    window.open("https://noah-code1210.github.io/Treact-Project/");
  }
  function navToTreactGit() {
    window.open("https://github.com/Noah-code1210/Treact-Project");
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
                <div className="project__title">Ultraverse NFT</div>
                <div className="project__description">
                  This project was also for an internship, and its main purpose
                  was to gain more knowledge on fetching API data and displaying
                  it in multiple different places. To give it more of an
                  interactive vibe, I added a lot of "onClick" functionality for
                  the users to play around with and explore the website more.
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
          <div className="project__info">
            <div className="project__wrapper">
              <div className="project__text">
                <div className="project__title">Tesla Clone</div>
                <div className="project__description">
                  For this project, I decided to make my first ever clone
                  project using a framework that I had been learning and taking
                  notes on, Next.js! This is a project that really doesn't have
                  too much functionality, but it displays my strengths in UI
                  design and creativeness as well. I added a non-functional
                  login and signup page, which I plan to make functional with
                  firebase soon!
                </div>
                <br />
                <div className="technologies__used--title">
                  Technologies Used:
                  <div className="technologies__used--para">
                    Next.js, HTML, CSS, JavaScript, Redux
                  </div>
                </div>
                <div className="project__links">
                  <div className="vercel__project--link">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="link"
                      onClick={navToTesla}
                    />
                  </div>
                  <div className="vercel__project--link">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="link"
                      onClick={navToTeslaGit}
                    />
                  </div>
                </div>
              </div>
              <img src={Treact} alt="" className="project__img" />
            </div>
          </div>
          <div className="project__info">
            <div className="project__wrapper">
              <div className="project__text">
                <div className="project__title">Treact </div>
                <div className="project__description">
                  While this project does not have any functionality to it, it
                  displays my skills in basic CSS and HTML. It was one of the
                  first projects I ever completed, and it helped me master the
                  use of flexbox, margins, text-align, and more. While I could
                  add functionality to it now, I feel that the siplicity of this
                  project shows my broad knowledge of basic frontend coding.
                </div>
                <br />
                <div className="technologies__used--title">
                  Technologies Used:
                  <div className="technologies__used--para">HTML and CSS</div>
                </div>
                <div className="project__links">
                  <div className="vercel__project--link">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="link"
                      onClick={navToTreact}
                    />
                  </div>
                  <div className="vercel__project--link">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="link"
                      onClick={navToTreactGit}
                    />
                  </div>
                </div>
              </div>
              <img src={Treact} alt="" className="project__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
