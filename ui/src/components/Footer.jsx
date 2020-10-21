import React from 'react';
import logo from "../img/logo-white.png";
import iconFacebook from "../img/icon-facebook.png";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="rodape">
        <div className="rodape__principal">
            <ul className="rodape__navegacao">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="http://www.reprograma.com.br/" target="_blank" rel="noopener noreferrer">{"Conheça a {reprograma}"}</a>
                </li>
            </ul>
            <div className="rodape__logo">
                <img className="img-responsive" src={logo} alt="logo M de Maravilhosa"/>
            </div>
            <div className="rodape__redes-sociais">
                <a href="https://www.facebook.com/ReprogramaBr/" target="_blank" rel="noopener noreferrer">
                    <img src={iconFacebook} alt="Icone do facebook Reprograma"/>
                    <span>/br.mdemaravilhosa</span>
                </a>
            </div>
        </div>
        <div className="rodape__cc">
            <p>Creative Commons 2018 | Feito com amor por Reprograma</p>
        </div>
    </footer>
    )
}
export default Footer;


