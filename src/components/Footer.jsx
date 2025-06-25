import React from 'react'
import Logo from "../assets/mylogo.png"

function Footer() {
  return (
    <div>
        <div id="section">
            <div className="container footer__container">
                <div className="logo__wrapper">
                    
                    <img src={Logo} alt="" className='footer__img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer