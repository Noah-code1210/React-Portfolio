import React from "react";
import SkinstricPNG from "../assets/Skinstric.png"

function Experience() {
  return (
    <>
      <div id="section experience__section">
        <div className="container">
          <h1 className="experience__title">Experience</h1>
          <div className="experience__info">
            <div className="experience__text">
              <h2 className="experience__intern--title">
                Skinstric Virtual Internship
              </h2>
              <h3 className="experience__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt eos dolores, labore reprehenderit non laborum et
                molestias molestiae beatae fuga perferendis cupiditate nobis,
                voluptas esse enim maiores sit tempora. Officia id odio totam
                blanditiis deleniti cupiditate nihil? Vitae numquam error
                voluptates molestiae repellat rem in dolor adipisci praesentium?
                Sequi voluptatum distinctio repudiandae molestias reprehenderit,
                ipsa dolorem. Temporibus laboriosam in excepturi.
              </h3>
              <h3 className="experience__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt eos dolores, labore reprehenderit non laborum et
                molestias molestiae beatae fuga perferendis cupiditate nobis,
                voluptas esse enim maiores sit tempora. Officia id odio totam
                blanditiis deleniti cupiditate nihil? Vitae numquam error
                voluptates molestiae repellat rem in dolor adipisci praesentium?
                Sequi voluptatum distinctio repudiandae molestias reprehenderit,
                ipsa dolorem. Temporibus laboriosam in excepturi.
              </h3>
            </div>
            <div className="experience__img--wrapper">
              <div className="experience__img--title">
                Skinstric A.I
              </div>
              <img src={SkinstricPNG} alt="" className="experience__img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
