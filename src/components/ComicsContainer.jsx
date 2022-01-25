import React from "react";
import ComicItem from "./ComicItem";
import '../styles/components/ComicsContainer.css'

const ComicsContainer = ({comics}) => {
  return (
    <section className="comicsContainer">
      {comics.map(comic => 
        <ComicItem
          key={comic.id}
          title={comic.title}
          writer={comic.creators.items[0].name}
          image={comic.thumbnail.path}
        />
      )}
    </section>
  )
}

export default ComicsContainer;