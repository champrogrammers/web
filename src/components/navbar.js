import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import alertify from 'alertifyjs';
import '../styles/hamburguer.css';

//Menu hamburguesa
import Hamburguer from '../components/hamburguer';

class Navbar extends Component {

    componentDidMount() {
        let date = new Date();
        let hour = date.getHours();
        if (hour >= 20) {
            alertify.notify('Buenas Noches');
        }
        if (hour >= 1 && hour <= 12) {
            alertify.notify('Buenos Dias');
        }
        if (hour >= 13 && hour <= 19) {
            alertify.notify('Buenas Tardes');
        }
    }

    render() {

        return (
            <nav>
                <ul>
                    <div className="default-menu">
                        <div className="nav-bar">
                            <li> <NavLink activeClassName="active" to="/Home">Inicio</NavLink> </li>
                            <li> <NavLink activeClassName="active" to="/Services">Servicios</NavLink></li>
                            <li> <NavLink activeClassName="active" to="/Portfolio">Portafolio</NavLink> </li>
                            <li> <NavLink activeClassName="active" to="/Contact">Contacto</NavLink> </li>
                        </div>
                    </div>
                    <div className="mobile-menu">
                        <div className="nav-bar">
                            <Hamburguer />
                        </div>

                    </div>
                </ul>
            </nav>
        )

    }

}

export default Navbar;