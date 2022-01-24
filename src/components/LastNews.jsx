import React from "react";
import image1 from '../static/images/img-2.jpg'
import '../styles/components/LastNews.css'

const LastNews = () => {
  return (
    <section className="lastNews">
      <h2>LO ÚLTIMO</h2>
      <div className="lastNews__container">
        <article className="lastNews__container--info">
          <img src={image1} alt="image1" />
          <div className="infoSection">
            <h3>REMOLQUES Y EXTRAS</h3>
            <p>¡Los orígenes de BATTLEWORLD! | Marvel Reino de Campeones</p>
          </div>
        </article>

        <article className="lastNews__container--info">
          <img src={image1} alt="image1" />
          <div className="infoSection">
            <h3>REMOLQUES Y EXTRAS</h3>
            <p>¡Los orígenes de BATTLEWORLD! | Marvel Reino de Campeones</p>
          </div>
        </article>
        
        <article className="lastNews__container--info">
          <img src={image1} alt="image1" />
          <div className="infoSection">
            <h3>REMOLQUES Y EXTRAS</h3>
            <p>¡Los orígenes de BATTLEWORLD! | Marvel Reino de Campeones</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default LastNews