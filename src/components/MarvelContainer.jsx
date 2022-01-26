import React from "react";
import MarvelItem from "./MarvelItem";
import '../styles/components/ComicsContainer.css'

const MarvelContainer = ({children}) => {
  return (
    <section className="comicsContainer">
      {children}
    </section>
  )
}

export default MarvelContainer;