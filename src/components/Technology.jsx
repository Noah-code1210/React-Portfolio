import React from 'react'

function Technology() {
  return (
    <>
        <div id="section tech__section">
            <div className="container tech__container">
                <div className="section__title">
                    Technology
                </div>
                <div className="skill__list--wrapper">
                    <div className="technology__title">
                        HTML
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" alt="" className="technology__img" />
                    </div>
                    <div className="technology__title">
                        CSS
                        <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" alt="" className="technology__img" />
                    </div>
                    <div className="technology__title">
                        JavaScript
                        <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png" alt="" className="technology__img" />
                    </div>
                    <div className="technology__title">
                        React
                        <img src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.pngF" alt="" className="technology__img" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Technology