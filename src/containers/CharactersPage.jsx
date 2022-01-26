import React, { useEffect, useState } from "react";
import MarvelContainer from "../components/MarvelContainer";
import MarvelInfoSection from "../components/MarvelInfoSection";
import MarvelItem from "../components/MarvelItem";

const APICHARACTER = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Sp&apikey=8526f63108858108aa28c920ad34cf34&ts=1&hash=1c7b67dc4beddbc02b51e24dffb77d46'

const CharactersPage = () => {

  const [characters, setCharacters] = useState([])

  useEffect(async()=>{
    try {
      const response = await fetch(APICHARACTER)
      const data = await response.json()
      setCharacters(data.data.results)
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <>
    <MarvelInfoSection>
      <MarvelContainer>
        {characters.map(character => 
          <MarvelItem
            key={character.id}
            title={character.name}
            writer={character.comics.available}
            image={character.thumbnail.path}
          />
        )}
      </MarvelContainer>
    </MarvelInfoSection>
    </>
  )
}

export default CharactersPage