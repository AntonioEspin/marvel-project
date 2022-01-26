import React, { useEffect, useState } from "react";
import MarvelContainer from "../components/MarvelContainer";
import MarvelInfoSection from "../components/MarvelInfoSection";
import HeroSection from "../components/HeroSection";
import MarvelItem from "../components/MarvelItem";

const APICOMICS = process.env.API

const ComicsPage = () => {
  const [comics, setComics] = useState([])

  useEffect(async ()=>{
    const response = await fetch(APICOMICS)
    const data = await response.json()
    setComics(data.data.results)
  }, [])

  return (
    <>
      <HeroSection/>
      <MarvelInfoSection>
        <MarvelContainer>
          {comics.map(comic => 
            <MarvelItem
              key={comic.id}
              title={comic.title}
              writer={comic.creators.items[0].name}
              image={comic.thumbnail.path}
            />
          )}
        </MarvelContainer>
      </MarvelInfoSection>
    </>
  )
}

export default ComicsPage;