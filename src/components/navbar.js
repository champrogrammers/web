import React, { Component } from 'react';

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
                            <li> <a href="#">Inicio</a> </li>
                            <li> <a href="#">Servicios</a></li>
                            <li> <a href="#">Portafolio</a> </li>
                            <li> <a href="#">Contacto</a> </li>
                        </div>
                    </div>
                </ul>
            </nav>
        )

    }

}

export default Navbar;