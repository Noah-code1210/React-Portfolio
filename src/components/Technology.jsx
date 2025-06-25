import React from "react";
import Git from "../assets/Git.png";
import TailwindCSS from "../assets/TailwindCSS.png";
import NextJS from "../assets/NextJS.png";
import Redux from "../assets/Redux.png";


function Technology() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div id="section tech__section">
        <div className="container tech__container">
          <div className="section__title">Technology</div>
            <div className="tech__list--wrapper">
              <div className="technology__title">HTML</div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                alt=""
                className="technology__img"
              />
              <div className="technology__title">CSS</div>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                alt=""
                className="technology__img"
              />
              <div className="technology__title">JavaScript</div>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                alt=""
                className="technology__img"
              />
              <div className="technology__title">React</div>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.pngF"
                alt=""
                className="technology__img"
              />
              <div className="technology__title">Git</div>
              <img src={Git} alt="" className="technology__img" />
              <div className="technology__title">Tailwind</div>
              <img src={TailwindCSS} alt="" className="technology__img" />
              <div className="technology__title">Next JS</div>
              <img src={NextJS} alt="" className="technology__img" />
              <div className="technology__title">Redux</div>
              <img src={Redux} alt="" className="technology__img" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Technology;
