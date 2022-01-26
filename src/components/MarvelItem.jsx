import React from "react";
import '../styles/components/ComicItem.css'

const MarvelItem = ({title, writer, image}) => {
  return (
    <article className="comicItem">
      <img src={`${image}/portrait_uncanny.jpg`} alt={title} />
      <div className="comicItem__info">
        <h3>{title}</h3>
        <p>{writer}</p>
      </div>
    </article>
  )
}

export default MarvelItem;