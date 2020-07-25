import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Footer extends Component {

    render() {
        let date = new Date();
        let year = date.getFullYear();
        return (
            <footer className="footer">
                <div className="row">
                    <ul>
                        Mapa de sitio
                        <li><NavLink to="/Cham-portfolio/Home/Home">Inicio</NavLink></li>
                        <li><NavLink to="/Cham-portfolio/Home/Services">Servicios</NavLink></li>
                        <li><NavLink to="/Cham-portfolio/Home/Portfolio">Portafolio</NavLink></li>
                        <li><NavLink to="/Cham-portfolio/Home/Contact">Contacto</NavLink></li>
                    </ul>
                </div>
                <div className="row">
                    <ul>
                        Redes Sociales
                <li>
                            <a href="https://www.instagram.com/cham_programmers/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram" aria-hidden="true"></i> Instragram
                    </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/Cham-Programmers-116797153450643/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook" aria-hidden="true"></i> Facebook
                    </a>
                        </li>
                    </ul>
                </div>
                <div className="clearfix">
                    <div className="txt-footer">
                        <p><span>&#169;</span>{`Copyrigth CHAM - ${year}`}</p>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer;