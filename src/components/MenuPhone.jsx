import React from "react";
import {Link} from 'react-router-dom'
import menuIcon from '../static/icons/menu.svg'
import '../styles/components/MenuPhone.css'

const MenuPhone = ({menu, handleMenu}) => {
  return (
    <section className= {menu ? 'menuPhone': 'invisible'} >
      <figure className="menuPhone__img">
        <img src={menuIcon} alt="menu" onClick={handleMenu}/>
      </figure>
      <div className="menuPhone__nav">
        <ul>
          <li className="menuPhone__nav--list">
            <a href="">VIDEOS</a>
          </li>
          <li className="menuPhone__nav--list">
            <a href="">CARACTERES</a>
          </li>
          <li className="menuPhone__nav--list">
            <Link to="/comics">HISTORIETAS</Link>
          </li>
          <li className="menuPhone__nav--list">
            <a href="">PELÍCULAS</a>
          </li>
          <li className="menuPhone__nav--list">
            <a href="">PROGRAMAS DE TELEVISIÓN</a>
          </li>
          <li className="menuPhone__nav--list">
            <a href="">JUEGOS</a>
          </li>
          <li className="menuPhone__nav--list">
            <a href="">NOTICIAS</a>
          </li>
          <li className="menuPhone__nav--list">
            <a href="">MÁS</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MenuPhone;