import React from "react";
import Logo from '../static/icons/Marvel-logo.svg'
import iconFacebook from '../static/icons/icons8-facebook 1.svg'
import iconTwitter from '../static/icons/icons8-twitter 1.svg'
import iconInstagram from '../static/icons/icons8-instagram 1.svg'
import iconYoutube from '../static/icons/icons8-play_button 1.svg'
import '../styles/components/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <figure className="footer__img">
        <img src={Logo} alt="Logo" />
      </figure>
      <nav className="footer__nav">
        <ul>
          <li><a href="">SOBRE MARVEL</a></li>
          <li><a href="">AYUDA / PREGUNTAS FRECUENTES</a></li>
          <li><a href="">CARRERAS</a></li>
          <li><a href="">PASANTÍAS</a></li>
          <li><a href="">PUBLICIDAD</a></li>
          <li><a href="">MARVELHQ.COM</a></li>
          <li><a href="">CANJEAR CÓMICS DIGITALES</a></li>
        </ul>
      </nav>
      <div className="footer__social">
        <p>SIGUE A MARVEL</p>
        <ul className="footer__social--list">
          <li>
            <a href="">
              <img src={iconFacebook} alt="iconFacebook" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={iconTwitter} alt="iconTwitter" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={iconInstagram} alt="iconInstagram" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={iconYoutube} alt="iconYoutube" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;