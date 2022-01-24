import React from "react";
import imageCard from '../static/images/img-5.jpg'
import '../styles/components/MarvelCard.css'

const MarvelCard = () => {
  return (
    <section className="marvelCard">
      <div className="marvelCard__img">
        <img src={imageCard} alt="imageCard" />
      </div>
      <div className="marvelCard__info">
        <p>MARVEL MASTERCARD</p>
        <p>Obtenga un crédito de estado de cuenta de $ 25</p>
        <button>APRENDER MÁS</button>
      </div>
    </section>
  )
}

export default MarvelCard;