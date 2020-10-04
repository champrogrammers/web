import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/404.css';

class Error404 extends Component {
    render(){
        return(
            <div className="Error404">
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                <span className="animate__animated animate__flash">404</span>
                <div className="animate__animated animate__backInUp">
                   <p>Página no disponible</p>
                    <p>La página que solicitaste no existe en el servidor.</p> 
                </div>
                <NavLink activeClassName="active" to="/Home">Volver al inicio</NavLink>
            </div>
        
        )
    }
}

export default Error404;