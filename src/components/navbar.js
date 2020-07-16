import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Navbar extends Component {

    render() {

        return (
            <nav>
                <ul>
                    <div className="nav-bar">
                        <div className="nav-left">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <div className="contents nav-bar">
                            <li> <NavLink to="/Home">Inicio</NavLink> </li>
                            <li> <NavLink to="/Services">Servicios</NavLink></li>
                            <li> <NavLink to="/Portfolio">Portafolio</NavLink> </li>
                            <li> <NavLink to="/Contact">Contacto</NavLink> </li>
                        </div>
                    </div>
                </ul>
            </nav>
        )

    }

}

export default Navbar;