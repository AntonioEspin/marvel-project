import React from "react";
import imageComics from '../static/images/image-comics.png'
import '../styles/components/GetMarvelUnlimited.css'

const GetMarvelUnlimited = () => {
  return (
    <section className="getMarvelUnlimited">
      <img src={imageComics} alt="imageComics" />
      <div className="getMarvelUnlimited__info">
        <p className="first-child">DISPONIBLE AHORA</p>
        <h2>NUEVO EN MARVEL UNLIMITED</h2>
        <p>¡Lea estos 28,000 cómics digitales por$ 9.99 al mes!</p>
        <button>OBTÉN MARVEL UNLIMITED </button>
      </div>
    </section>
  )
}

export default GetMarvelUnlimited;