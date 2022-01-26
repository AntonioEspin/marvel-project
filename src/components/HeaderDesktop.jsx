import React from "react";
import {Link} from 'react-router-dom'
import '../styles/components/HeaderDesktop.css'
import Logo from '../static/icons/Marvel-logo.svg'

const HeaderDesktop = () => {
  return (
    <header className="headerDesktop">
      <div className="headerDesktop__login">
        <p>REGISTRARSE | UNIRSE</p>
        <figure>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </figure>
      </div>
      <div className="headerDesktop__nav">
        <ul>
          <li className="headerDesktop__nav--list">
            <a href="">VIDEOS</a>
          </li>
          <li className="headerDesktop__nav--list">
            <Link to="/characters">CARACTERES</Link>
          </li>
          <li className="headerDesktop__nav--list">
            <Link to="/comics">HISTORIETAS</Link>
          </li>
          <li className="headerDesktop__nav--list">
            <a href="">PELÍCULAS</a>
          </li>
          <li className="headerDesktop__nav--list">
            <a href="">PROGRAMAS DE TELEVISIÓN</a>
          </li>
          <li className="headerDesktop__nav--list">
            <a href="">JUEGOS</a>
          </li>
          <li className="headerDesktop__nav--list">
            <a href="">NOTICIAS</a>
          </li>
          <li className="headerDesktop__nav--list">
            <a href="">MÁS</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default HeaderDesktop