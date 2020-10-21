import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo-white.png";
import iconFacebook from "../img/icon-facebook.png";
import iconTwitter from "../img/icon-twitter.png";
import iconInstagram from "../img/icon-instagram.png";
import iconLinkedin from "../img/icon-linkedin.png";
import iconMenu from "../img/menu-nav.png";

const Header = () => {
  return (
    <header className="navegacao">
        <div className="navegacao__box container">
            <Link className="navegacao__logo" to="/">
                <img className="img-responsive" src={logo} alt="Logo M de Maravilhosa"/>
            </Link>
            <div className="navegacao__itens" id="menuResponsivo">
                <nav className="navegacao__nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="http://www.reprograma.com.br/" target="_blank" rel="noopener noreferrer">{"Conheça a {reprograma}"}</a>
                        </li>
                    </ul>
                </nav>
                <nav className="navegacao__redes-sociais">
                    <a href="https://www.facebook.com/ReprogramaBr/" target="_blank" rel="noopener noreferrer">
                        <img src={iconFacebook} alt="Íconde do Facebook"/>
                    </a>
                    <a href="https://twitter.com/ReprogramaBr" target="_blank" rel="noopener noreferrer">
                        <img src={iconTwitter} alt="Ícone do Twitter"/>
                    </a>
                    <a href="https://www.instagram.com/reprogramabr/" target="_blank" rel="noopener noreferrer">
                        <img src={iconInstagram} alt="Ícone do Instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/company/reprogramabr/" target="_blank" rel="noopener noreferrer">
                        <img src={iconLinkedin} alt="Ícone do LinkedIn"/>
                    </a>
                </nav>
            </div>
            <div className="navegacao__menu-hamburguer" id="btnResponsivo">
                <Link to="/">
                    <img src={iconMenu} alt="Menu de navegação"/>
                </Link>
            </div>
        </div>
    </header>
    )
};
export default Header;
