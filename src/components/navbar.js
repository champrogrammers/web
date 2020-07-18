import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/hamburguer.css';

//Menu hamburguesa
import Hamburguer from '../components/hamburguer';

class Navbar extends Component {

    render() {

        return (
            <nav>
                <ul>
                    <div className="default-menu">
                        <div className="nav-bar">
                            <li> <NavLink to="/Home">Inicio</NavLink> </li>
                            <li> <NavLink to="/Services">Servicios</NavLink></li>
                            <li> <NavLink to="/Portfolio">Portafolio</NavLink> </li>
                            <li> <NavLink to="/Contact">Contacto</NavLink> </li>
                        </div>
                    </div>
                    <div className="mobile-menu">
                    <div className="nav-bar">
                        <Hamburguer/>
                    </div>
                        
                    </div>
                </ul>
            </nav>
        )

    }

}

export default Navbar;