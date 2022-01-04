import React from "react";
import menuIcon from '../static/icons/menu.svg'
import marvelLogo from '../static/icons/Marvel-logo.svg'
import '../styles/components/Header.css'

const HeaderPhone = ({children, handleMenu}) => {

  return (
    <>
      <header className="HeaderPhone">
        <figure className="HeaderPhone__img">
          <img src={menuIcon} alt="menu" onClick={handleMenu} />
        </figure>
        <div className="HeaderPhone__logo">
          <img src={marvelLogo} alt="marvelLogo" />
        </div>
      </header>
      {children}
    </>
  );
};

export default HeaderPhone;