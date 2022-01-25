import React, { useEffect, useState } from "react";
import ComicsContainer from "../components/ComicsContainer";
import ComicsSection from "../components/ComicsSection";
import HeroSection from "../components/HeroSection";

const ComicsPage = () => {

  const API = process.env.API

  const [comics, setComics] = useState([])

  useEffect(async ()=>{
    const response = await fetch(API)
    const data = await response.json()
    setComics(data.data.results)
  }, [])

  return (
    <>
      <HeroSection/>
      <ComicsSection>
        <ComicsContainer comics={comics}/>
      </ComicsSection>
    </>
  )
}

export default ComicsPage;