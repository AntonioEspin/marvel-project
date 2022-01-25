import React from "react";
import HeroSection from "../components/HeroSection";
import GiftsSection from "../components/GiftsSection";
import GiftsProducts from "../components/GiftsProducts";
import GetMarvelUnlimited from "../components/GetMarvelUnlimited";
import LastNews from "../components/LastNews";
import MarvelCard from "../components/MarvelCard";
import '../styles/global.css'

const MainPage = () => {
  return (
    <>
      <HeroSection/>
      <GiftsSection>
        <GiftsProducts/>
      </GiftsSection>
      <GetMarvelUnlimited/>
      <LastNews/>
      <MarvelCard/>
    </>
  )
}

export default MainPage;