import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="row">
                    <ul>
                        Mapa de sitio
                        <li><NavLink to="/Home">Inicio</NavLink></li>
                        <li><NavLink to="/Services">Servicios</NavLink></li>
                        <li><NavLink to="/Portfolio">Portafolio</NavLink></li>
                        <li><NavLink to="/Contact">Contacto</NavLink></li>
                    </ul>
                </div>
                <div className="row">
                    <ul>
                        Redes Sociales
                <li>
                            <a href="https://www.instagram.com/cham_programmers/" target="_blank" rel="Instagram">
                                <i className="fa fa-instagram" aria-hidden="true"></i> Instragram
                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true"></i> Facebook
                    </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-github" aria-hidden="true"></i> Github
                    </a>
                        </li>
                    </ul>
                </div>
                <div className="clearfix">
                    <div className="txt-footer">
                        <p><span>&#169;</span>Copyrigth CHAM - 2020</p>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer;