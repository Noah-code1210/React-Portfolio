import React, { useContext } from "react"; // <--- Import useContext
import Git from "../assets/Git.png";
import TailwindCSS from "../assets/TailwindCSS.png";
import NextJS from "../assets/NextJS.png";
import Redux from "../assets/Redux.png";
import { ScrollContext } from "../contexts/ScrollContext.js"; // <--- Import ScrollContext

function Technology() {
  // <--- Use useContext to get the specific ref for this component
  const { technologyRef } = useContext(ScrollContext);

  return (
    <>
      {/* <--- Attach the ref obtained from context to the main wrapping div/section */}
      <div ref={technologyRef} id="section tech__section">
        <div className="container tech__container">
          <div className="section__title">Technology</div>
          <div className="tech__list--wrapper">
            <div className="tech__info">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                alt=""
                className="technology__img html"
              />
              <div className="technology__title">HTML</div>
            </div>
            <div className="tech__info">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                alt=""
                className="technology__img css"
              />
              <div className="technology__title">CSS</div>
            </div>
            <div className="tech__info">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                alt=""
                className="technology__img javascript"
              />
              <div className="technology__title">JavaScript</div>
            </div>
            <div className="tech__info">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                alt=""
                className="technology__img react"
              />
              <div className="technology__title">React</div>
            </div>
            <div className="tech__info">
              <img src={Git} alt="" className="technology__img git" />
              <div className="technology__title">Git</div>
            </div>
            <div className="tech__info">
              <img
                src={TailwindCSS}
                alt=""
                className="technology__img tailwind"
              />
              <div className="technology__title">Tailwind</div>
            </div>
            <div className="tech__info">
              <img src={NextJS} alt="" className="technology__img nextjs" />
              <div className="technology__title">Next JS</div>
            </div>
            <div className="tech__info">
              <img src={Redux} alt="" className="technology__img redux" />
              <div className="technology__title">Redux</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technology;