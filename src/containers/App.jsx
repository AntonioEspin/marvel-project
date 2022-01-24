import React, { useState } from "react";
import HeaderPhone from "../components/HeaderPhone";
import MenuPhone from "../components/MenuPhone";
import HeroSection from "../components/HeroSection";
import GiftsSection from "../components/GiftsSection";
import GiftsProducts from "../components/GiftsProducts";
import '../styles/global.css'
import GetMarvelUnlimited from "../components/GetMarvelUnlimited";
import LastNews from "../components/LastNews";
import MarvelCard from "../components/MarvelCard";
import Footer from "../components/Footer";
import HeaderDesktop from "../components/HeaderDesktop";

const App = () => {

  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <HeaderPhone 
        setMenu={setMenu}
        menu={menu} 
        handleMenu={handleMenu}
      >
        <MenuPhone 
          menu={menu} 
          handleMenu={handleMenu}
        />
      </HeaderPhone>
      <HeaderDesktop/>
      <HeroSection/>
      <GiftsSection>
        <GiftsProducts/>
      </GiftsSection>
      <GetMarvelUnlimited/>
      <LastNews/>
      <MarvelCard/>
      <Footer/>
    </>
  )
}

export default App;