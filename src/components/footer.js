import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="row">
                    <ul>
                        Mapa de sitio
                <li> <a href="#">Inicio</a></li>
                        <li> <a href="#">Servicios</a></li>
                        <li> <a href="#">Porftafolio</a></li>
                        <li> <a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className="row">
                    <ul>
                        Redes Sociales
                <li>
                            <a href="https://www.instagram.com/cham_programmers/" target="_blank">
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