import React from "react";
import '../styles/components/ComicsSection.css'

const MarvelInfoSection = ({children}) => {
  return (
    <section className="comicsSection">
      <h1>Lanzamientos de este mes</h1>
      {children}
    </section>
  )
}

export default MarvelInfoSection;