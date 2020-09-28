import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Hamburguer extends Component {

    onClickMenu() {
        document.getElementById("menu").classList.toggle("change");
        document.getElementById("nav-2").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
    }

    render() {
        return (
            <React.Fragment>
                <div id="menu-bar">
                    <div id="menu" onClick={() => { this.onClickMenu() }}>
                        <div id="bar-1" className="bar"></div>
                        <div id="bar-2" className="bar"></div>
                        <div id="bar-3" className="bar"></div>
                    </div>
                    <div id="brand">
                        <span>CHAM</span>
                        <div id="secondary-txt">
                            <span>Programmers</span>
                        </div>
                    </div>
                    <ul className="nav-2" id="nav-2">
                        <li>
                            <NavLink activeClassName="active-responsive" to="/Home" onClick={() => { this.onClickMenu() }}>Inicio</NavLink>
                            <NavLink activeClassName="active-responsive" to="/Services" onClick={() => { this.onClickMenu() }}>Servicios</NavLink>
                            <NavLink activeClassName="active-responsive" to="/Portfolio" onClick={() => { this.onClickMenu() }}>Portafolio</NavLink>
                            <NavLink activeClassName="active-responsive" to="/Contact" onClick={() => { this.onClickMenu() }}>Contacto</NavLink>
                            <div id="socialMedia">
                                <div id="instagram-icon">
                                    <a href="https://www.instagram.com/cham_programmers/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div id="facebook-icon">
                                    <a href="https://www.facebook.com/Cham-Programmers-116797153450643/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div id="mail-icon">
                                    <a href="mailto:champrogrammers@gmail.com" rel="noopener noreferrer">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="menu-bg" id="menu-bg"></div>
            </React.Fragment>
        )
    }
}

export default Hamburguer;