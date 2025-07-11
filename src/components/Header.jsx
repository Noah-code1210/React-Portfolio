import React, { useState, useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFile,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollContext } from "../contexts/ScrollContext.js";
import emailjs from "@emailjs/browser";

AOS.init();

function Header() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModalRight, setShowModalRight] = useState(true);
  const [showLoadingSuccess, setShowLoadingSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("service_eamxcjq", "template_ujadqti", form.current, {
        publicKey: "MHJ3dcy-OK4NGMiSR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowModalRight(false);
          setShowSpinner(true);
          setTimeout(() => {
            setShowSpinner(false);
            setShowLoadingSuccess(true);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  function ModalLoading() {
    setTimeout(() => {
      setShowSpinner(false);
      setShowLoadingSuccess(true);
    }, 3000);
  }

  const { experienceRef, technologyRef, projectsRef, scrollToSection } =
    useContext(ScrollContext);

  const [openModal, setOpenModal] = useState(false);

  const handleModalClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpenModal(true);
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: 2800,
      behavior: "smooth",
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
                  onClick={handleModalClick}
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
            <div className="envelope__btn" onClick={handleModalClick}>
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
                  <div className="modal__para">
                    My name is Noah, and I am a 19 year old Frontend Software
                    Engineer who is currently looking work. I am located in
                    Philadelphia PA, and I am looking to work remotely for any
                    software engineering companies!
                    <br />
                    <br />
                    While I may still be young, I have a lot to offer for your
                    company. Longevity, discipline, perserverance, and problem
                    solving are just a few of the traits and attributes that I
                    could bring to the table. So, if youre looking for a hard
                    working employee that is still learning and growing in this
                    industry, contact me!
                  </div>
                  <h2 className="my__specialties--title">I specialize in:</h2>
                  <div className="specialties">
                    <div className="react__wrapper">
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                        alt=""
                        className="specialty__img"
                      />
                      <h2 className="react__specialty">React</h2>
                    </div>
                    <div className="HTML__wrapper">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                        alt=""
                        className="specialty__img"
                      />
                      <h2 className="HTML__specialty">HTML</h2>
                    </div>
                    <div className="CSS__wrapper">
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                        alt=""
                        className="specialty__img"
                      />
                      <h2 className="CSS__specialty">CSS</h2>
                    </div>
                    <div className="JS__wrapper">
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                        alt=""
                        className="specialty__img"
                      />
                      <h2 className="JS__specialty">JavaScript</h2>
                    </div>
                  </div>
                </div>
                <div className="modal__half modal__right">
                  {showModalRight && (
                    <div className="modal__right--info">
                      <div className="modal__title modal__right--title">
                        Let's have a chat
                      </div>
                      <div className="modal__sub-title modal__right--sub-title">
                        I'm currently open to new opprotunities
                      </div>
                      <form ref={form} onSubmit={sendEmail}>
                        <div className="form__item">
                          <label>Name</label>
                          <input type="text" name="name__input" />
                        </div>
                        <div className="form__item">
                          <label>Email</label>
                          <input type="email" name="name__input" />
                        </div>
                        <div className="form__item">
                          <label>Message</label>
                          <textarea name="message" />
                        </div>
                        <input
                          type="submit"
                          value="Send"
                          className="submit__button"
                        />
                      </form>
                    </div>
                  )}
                  {showSpinner && (
                    <div className="modal__loading">
                      <FontAwesomeIcon icon={faSpinner} />
                    </div>
                  )}
                  {showLoadingSuccess && (
                    <div className="loading__success--state">
                      <h1 className="loading__success--title">
                        Your message has been sent to Noah! Thank you for your
                        time
                      </h1>
                    </div>
                  )}
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
