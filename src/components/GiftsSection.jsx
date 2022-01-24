import React from "react";
import giftsImage from '../static/images/img-1.jpg'
import '../styles/components/GiftsSection.css'

const GiftsSection = ({children}) => {
  return (
    <section className="giftsSection">
      <div className="giftsSection__container">
        <img src={giftsImage} alt="giftsImage" />
        <div className="giftsSection__info">
          <h2>GUÍA DE REGALOS <br/> NAVIDEÑOS 2020</h2>
          <p>Los regalos perfectos para todos los fanáticos de Marvel</p>
          <button>VER AHORA</button>
        </div>
      </div>
      {children}
    </section>
  )
}

export default GiftsSection