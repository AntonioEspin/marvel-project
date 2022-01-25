import React, {useState} from "react";
import Footer from "../components/Footer";
import HeaderDesktop from "../components/HeaderDesktop";
import HeaderPhone from "../components/HeaderPhone";
import MenuPhone from "../components/MenuPhone";

const Layout = ({children}) => {
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
      {children}
      <Footer/>
    </>
  )
}

export default Layout;