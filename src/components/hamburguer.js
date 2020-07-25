import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Hamburguer extends Component {

    onClickMenu(){
        document.getElementById("menu").classList.toggle("change");
        document.getElementById("nav-2").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
    }

    render(){
        return(
            <React.Fragment>
                <div id="menu-bar">
                    <div id="menu" onClick={() => {this.onClickMenu()}}>
                        <div id="bar-1" className="bar"></div>
                        <div id="bar-2" className="bar"></div>
                        <div id="bar-3" className="bar"></div>
                    </div>
                    <ul className="nav-2" id="nav-2">
                        <li>
                            <NavLink to="/Cham-portfolio/Home">Inicio</NavLink>
                            <NavLink to="/Cham-portfolio/Services">Servicios</NavLink>
                            <NavLink to="/Cham-portfolio/Portfolio">Portafolio</NavLink>
                            <NavLink to="/Cham-portfolio/Contact">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="menu-bg" id="menu-bg"></div>
            </React.Fragment>
        )
    }
}

export default Hamburguer;