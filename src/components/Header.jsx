import React, { useState, useContext } from "react"; // Make sure useContext is imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "../contexts/ScrollContext.js"; // <--- IMPORT THE CONTEXT HERE

AOS.init();

function Header() {
  const { experienceRef, technologyRef, projectsRef, scrollToSection } =
    useContext(ScrollContext);

  const [openModal, setOpenModal] = useState(true);
  const navigate = useNavigate();

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: 2800,
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
                Philadelphia, PA
              </p>
              <p
                className="header__para"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                I'm a
                <span className="dark__blue"> frontend software engineer </span>
                looking for work. Here is some more information
                <span
                  className="dark__blue dark__blue--about"
                  onClick={() => setOpenModal(true)}
                >
                  {" "}
                  about me.
                </span>
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
                onClick={() => scrollToSection(experienceRef)}
                className="experience hover-btn"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection(technologyRef)}
                className="tech hover-btn"
                data-aos="fade-left"
                data-aos-duration="1250"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="projects hover-btn"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                Projects
              </button>
            </div>
            <div className="envelope__btn" onClick={() => setOpenModal(true)}>
              <FontAwesomeIcon icon={faEnvelope} className="envelope__img" />
            </div>
            {openModal && (
              <div className="modal">
                <div
                  className="close__modal"
                  onClick={() => setOpenModal(false)}
                >
                  X
                </div>
                <div className="modal__half modal__left">
                  <div className="modal__title modal__left--title">
                    Here's a bit more about me
                  </div>
                  <div className="modal__sub-title modal__left--sub-title">
                    Frontend Software Engineer
                  </div>
                </div>
                <div className="modal__half modal__right">
                  <div className="modal__title modal__right--title">
                    Let's have a chat
                  </div>
                  <div className="modal__sub-title modal__right--sub-title">
                    I'm currently open to new opprotunities
                  </div>
                  <form id="contact__form" onSubmit="contact(event)">
                    <div className="form__item" tabIndex={1}>
                      <label>Name</label>
                      <input type="text" className="name__input" />
                    </div>
                    <div className="form__item">
                      <label>Email</label>
                      <input type="text" className="name__input" />
                    </div>
                    <div className="form__item">
                      <label>Message</label>
                      <textarea type="text" className="name__input"></textarea>
                    </div>
                  </form>
                  <button className="submit__button">
                    Send it my way
                  </button>
                </div>
              </div>
            )}
            <div className="scroll__down" onClick={handleScrollToBottom}>
              <div className="scroll__down--btn"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
