import React, { useState } from "react";
import HeaderPhone from "../components/HeaderPhone";
import MenuPhone from "../components/MenuPhone";
import '../styles/global.css'

const App = () => {

  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
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
  )
}

export default App;