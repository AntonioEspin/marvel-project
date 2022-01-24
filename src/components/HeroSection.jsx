import React from "react";
import imageSpidy from '../static/images/img-6.jpg'
import logoSpidy from '../static/icons/logo-spiderman.png'
import '../styles/components/HeroSection.css'

const HeroSection = () => {
  return (
    <section className="heroSection">
      <img className="heroSection__img" src={imageSpidy} alt="spiderman" />
      <div className="heroSection__info">
        <img src={logoSpidy} alt="logoSpidy" />
        <article className="heroSection__info--article">
          <h2>¡DISPONIBLE AHORA!</h2>
          <p>Experimenta el ascenso de Miles Morales mientras domina nuevos poderes para convertirse en su propio Spider-Man. Exclusivamemente en PlayStation.</p>
          <button>VER AHORA</button>
        </article>
      </div>
    </section>
  )
}

export default HeroSection